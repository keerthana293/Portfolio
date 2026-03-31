require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors({ origin: /^http:\/\/localhost:\d+$/ }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.get('/api/test', async (req, res) => {
  try {
    await transporter.verify();
    res.json({ success: true, user: process.env.SMTP_USER });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/contact', async (req, res) => {
  const { from_name, reply_to, message } = req.body;

  if (!from_name || !reply_to || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    await transporter.sendMail({
      from: `"${from_name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: reply_to,
      subject: `New Portfolio Message from ${from_name}`,
      text: `Name: ${from_name}\nEmail: ${reply_to}\n\nMessage:\n${message}`,
    });
    res.json({ success: true });
  } catch (err) {
    console.error('SMTP Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
