export function contact(variables: any) {
    return `
      <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contact Inquiry</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .email-container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .header {
          background-color: #309255;
          color: #ffffff;
          text-align: center;
          padding: 20px;
          font-size: 20px;
          font-weight: bold;
        }
        .content {
          padding: 20px 20px 10px;
          color: #333333;
          line-height: 1.6;
          text-align: center;
        }
        .content h2 {
          color: #309255;
          margin-top: 0;
          font-size: 22px;
        }
        .contact-details {
          background-color: #f9f9f9;
          padding: 0 0 20px 20px;
          margin: 10px 20px;
          border-radius: 8px;
          line-height: 1.8;
          color: #333;
        }
        .contact-details p {
          margin: 5px 0;
          font-size: 15px;
        }
        .contact-details strong {
          color: #309255;
        }
        .email-footer {
          text-align: center;
          font-size: 14px;
          color: #777;
          margin-top: 20px;
        }
        .footer {
          background-color: #212832;
          color: #fff;
          text-align: center;
          padding: 10px 20px;
          font-size: 14px;
        }
        .footer a {
          color: #309255;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">📩 New Contact Inquiry Received</div>
  
        <div class="content">
          <h2>You've Got a New Message!</h2>
  
          <h2>Hey Sohan,</h2><br />
          A new contact inquiry has been submitted by
          <strong>${variables.name}</strong>. Please review the details below and take
          the necessary action.
        </div>
  
        <div class="contact-details">
          <p><strong>📛 Name: </strong>${variables.name}</p>
          <p>
            <strong>📧 Email: </strong
            ><a href="mailto:${variables.email}">${variables.email}</a>
          </p>
          <p><strong>📞 Phone: </strong>${variables.mobile}</p>
          <p><strong>📝 Message: </strong>${variables.message}</p>
        </div>
  
        <div class="footer">
          <p>&copy; ${variables.year} SOHAN | All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>
    `;
}
