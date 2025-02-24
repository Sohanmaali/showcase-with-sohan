

"use server";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";
import nodemailer from "nodemailer";

export async function sendMail({
    email,
    sendTo,
    subject,
    templateName,
    variables,
}: {
    email: string;
    sendTo: string;
    subject: string;
    templateName: string;
    // variables: { [key: string]: string };
    variables: any;
}) {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            secure: process.env.MAIL_SECURE === "true",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });


        // Load HBS template
        // const templatePath = path.join(process.cwd(), "./templates", `${templateName}.hbs`);
        const templatePath = path.join(process.cwd(), "src/templates", `${templateName}.hbs`);

        console.log("-=-===-templatePath-=-=-", templatePath);

        variables.Year = new Date().getFullYear();

        const templateSource = fs.readFileSync(templatePath, "utf-8");

        // Compile Handlebars template
        const template = handlebars.compile(templateSource);
        const html = template({ data: variables });

        let info = await transporter.sendMail({
            from: `${process.env.SENDER_NAME}`,
            to: sendTo,
            subject: subject,
            text: `Hello ${variables.name}, Welcome to our platform!`,
            html: html,
        });

        console.log("Message sent: %s", info.messageId);
        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send email", error };
    }
}
