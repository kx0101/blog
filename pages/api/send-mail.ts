import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_EMAIL_ADDRESS,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.GMAIL_EMAIL_ADDRESS,
            subject,
            text: message,
            html: `<p>${message}</p>`,
        });

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send email' });
    }
}
