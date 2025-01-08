import nodemailer from 'nodemailer';

export default async function ContactAPI(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    console.log('Received request:', { name, email, subject, message });
    console.log('GMAIL_USER:', process.env.GMAIL_USER);
    console.log('GMAIL_PASS:', process.env.GMAIL_PASS);
    console.log('RECEIVER_EMAIL:', process.env.RECEIVER_EMAIL);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `${subject} - ${name}`,
      html: `
        <h2>${name}</h2>
        <h4>${email}</h4>
        <p>${message}</p>
      `
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent:', info.messageId);
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send message.', error: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}