import { Request, Response } from 'express'
import { sendEmail } from './services';

export const sendEmailHandler = async (req: Request, res: Response) => {
    const { subject, text } = req.body;
    try {
        await sendEmail(subject, text);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send email', error });
    }
};
