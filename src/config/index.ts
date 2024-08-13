export const config = {
  smtpHost: process.env.SMTP_HOST || 'smtp.office365.com',
  smtpPort: parseInt(process.env.SMTP_PORT || '587'),
  smtpUser: process.env.SMTP_USER,
  smtpPass: process.env.SMTP_PASS
};
