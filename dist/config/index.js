"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    smtpHost: process.env.SMTP_HOST || 'smtp.office365.com',
    smtpPort: parseInt(process.env.SMTP_PORT || '587'),
    smtpUser: process.env.SMTP_USER || 'joseline-mls@hotmail.es',
    smtpPass: process.env.SMTP_PASS || 'Josseline.1996'
};
