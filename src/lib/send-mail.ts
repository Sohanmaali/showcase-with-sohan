

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

        // const templatePath = path.resolve(process.cwd(), "public", "templates", `${templateName}.hbs`);
        const templatePath = path.resolve(process.cwd(), "src", "templates", `${templateName}.hbs`);
        // const templatePath = path.resolve(process.cwd(), "src/templates/contact.hbs");

        console.log("-=-=--templatePath-=--=", templatePath);

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
        return { status: "success", message: "Email sent successfully!" };
    } catch (error) {
        throw error
        // return { success: "error", message: "Failed to send email", error };
    }
}
