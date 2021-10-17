"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patiensService_1 = __importDefault(require("../services/patiensService"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    console.log('patients');
    res.send(patiensService_1.default.getPatients());
});
exports.default = router;
