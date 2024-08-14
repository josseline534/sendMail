import { emailClient } from "../../utils/emailClient";

export const sendEmail = async (subject: string, text: string) => {
  try {
    const info = await emailClient.sendMail({
      from: '"Joss Web 🤩" <joseline-mls@hotmail.es>', // Correo del remitente
      to: 'josselinesanchezb@gmail.com', // Correo del destinatario
      subject,
      text
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('[sendEmail] => error: ', error);
    throw error
  }
};
