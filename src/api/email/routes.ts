import { Router } from 'express';
import { sendEmailHandler } from './sendEmailHandler';

const router = Router();

router.post('/send', sendEmailHandler);

export default router;
