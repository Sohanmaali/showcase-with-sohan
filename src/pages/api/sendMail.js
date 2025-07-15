
// pages/api/sendMail.js (or app/api/sendMail/route.js for App Router)
import nodemailer from "nodemailer";
import { IncomingForm } from "formidable";
import fs from "fs";

// Disable Next.js body parser for Pages Router
export const config = {
  api: { bodyParser: false },
};

// Helper to wrap formidable in a promise
const parseForm = (req) =>
  new Promise((resolve, reject) => {
    const form = new IncomingForm({
      maxFileSize: 25 * 1024 * 1024, // 25MB limit
      keepExtensions: true,
    });
    
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  console.log("-=-===hrere-=-");
  
  try {
    const { files } = await parseForm(req);
    
    // Handle both single file and array cases
    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Validate file type
    if (!file.originalFilename?.endsWith('.zip')) {
      return res.status(400).json({ message: "Only ZIP files are allowed" });
    }

    const filePath = file.filepath || file.path;
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(500).json({ message: "Uploaded file not found" });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      // service: "gmail",
      // auth: {
      //   user: "marilyne97@ethereal.email",
      //   pass: "zufDrdVZ2F7FQPr7Bs", // Use App Password for Gmail
      // },

       host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: process.env.MAIL_SECURE === "true",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Send email
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: "sohanmaali4@gmail.com", // Consider making this configurable
      subject: "ZIP File Attachment",
      text: `Attached is the ZIP file: ${file.originalFilename}`,
      html: `<p>Attached is the ZIP file: <strong>${file.originalFilename}</strong></p>`,
      attachments: [
        {
          filename: file.originalFilename,
          path: filePath,
        },
      ],
    });

    // Clean up temporary file
    try {
      fs.unlinkSync(filePath);
    } catch (cleanupErr) {
      console.warn("Failed to cleanup temp file:", cleanupErr);
    }

    return res.status(200).json({ message: "Email sent successfully!" });
    
  } catch (err) {
    console.error("Error:", err);
    
    // More specific error messages
    if (err.code === 'EAUTH') {
      return res.status(500).json({ message: "Email authentication failed" });
    } else if (err.code === 'EMESSAGE') {
      return res.status(500).json({ message: "Email sending failed" });
    } else if (err.message?.includes('maxFileSize')) {
      return res.status(400).json({ message: "File size too large" });
    }
    
    return res.status(500).json({ message: "Something went wrong" });
  }
}

