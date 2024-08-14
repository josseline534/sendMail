"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./api/email/routes"));
const app = (0, express_1.default)();
const port = 3005;
app.use((0, cors_1.default)());
app.get('/', (_req, res) => res.send('Health Check!'));
app.use(express_1.default.json());
app.use('/api/v1/emails', routes_1.default);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
