"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailClient = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = require("../config");
exports.emailClient = nodemailer_1.default.createTransport({
    host: config_1.config.smtpHost,
    port: config_1.config.smtpPort,
    secure: true,
    auth: {
        user: config_1.config.smtpUser,
        pass: config_1.config.smtpPass
    }
});
