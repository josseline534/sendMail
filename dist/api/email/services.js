"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const emailClient_1 = require("../../utils/emailClient");
const sendEmail = async (subject, text) => {
    const info = await emailClient_1.emailClient.sendMail({
        from: '"Joss Web 🤩" <joseline-mls@hotmail.es>', // Correo del remitente
        to: 'josselinesanchezb@gmail.com', // Correo del destinatario
        subject,
        text
    });
    console.log('Message sent: %s', info.messageId);
};
exports.sendEmail = sendEmail;
