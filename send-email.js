// api/send-email.js
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Vercel automatically parses JSON, so req.body is ready
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { to, subject, html } = req.body || {};

  if (!to || !subject || !html) {
    return res.status(400).json({ error: 'to, subject, and html are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,                     // true = 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Raj 👨‍💻" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error('Email error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
