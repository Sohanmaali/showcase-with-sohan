// pages/index.tsx (or app/page.tsx for App Router)
"use client";

import React, { useState } from "react";

const Page = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select a ZIP file");

    // Validate file type
    if (!file.name.endsWith('.zip')) {
      return alert("Please select a valid ZIP file");
    }

    // Check file size (e.g., 25MB limit for most email providers)
    const maxSize = 25 * 1024 * 1024; // 25MB
    if (file.size > maxSize) {
      return alert("File size too large. Maximum 25MB allowed.");
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/sendMail", {
        method: "POST",
        body: formData,
      });


      
      const result = await res.json();
      
      if (res.ok) {
        alert("Email sent successfully!");
        setFile(null);
        // Reset form
        const form = e.target as HTMLFormElement;
        form.reset();
      } else {
        alert(result.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Send ZIP File via Email</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="file-input" style={{ display: "block", marginBottom: "5px" }}>
            Select ZIP file:
          </label>
          <input
            id="file-input"
            type="file"
            name="file"
            accept=".zip"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            disabled={isLoading}
            style={{ width: "100%" }}
          />
        </div>
        
        {file && (
          <div style={{ marginBottom: "15px", fontSize: "14px", color: "#666" }}>
            Selected: {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
          </div>
        )}
        
        <button 
          type="submit" 
          disabled={!file || isLoading}
          style={{
            backgroundColor: isLoading ? "#ccc" : "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? "Sending..." : "Send ZIP via Email"}
        </button>
      </form>
    </div>
  );
};

export default Page;
// If using App Router, use this instead:
// app/api/sendMail/route.js
/*
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from "nodemailer";
import { IncomingForm } from "formidable";
import fs from "fs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
    }

    // Validate file type
    if (!file.name.endsWith('.zip')) {
      return NextResponse.json({ message: "Only ZIP files are allowed" }, { status: 400 });
    }

    // Convert File to Buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: "sohanmaali4@gmail.com",
      subject: "ZIP File Attachment",
      text: `Attached is the ZIP file: ${file.name}`,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json({ message: "Email sent successfully!" });
    
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
*/