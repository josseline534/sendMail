"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailHandler = void 0;
const services_1 = require("./services");
const sendEmailHandler = async (req, res) => {
    const { subject, text } = req.body;
    try {
        await (0, services_1.sendEmail)(subject, text);
        res.status(200).json({ message: 'Email sent successfully' });
    }
    catch (error) {
        console.error('error: ', error);
        res.status(500).json({ message: 'Failed to send email', error });
    }
};
exports.sendEmailHandler = sendEmailHandler;
