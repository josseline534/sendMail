"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sendEmailHandler_1 = require("./sendEmailHandler");
const router = (0, express_1.Router)();
router.post('/send', sendEmailHandler_1.sendEmailHandler);
exports.default = router;
