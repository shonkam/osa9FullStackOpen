"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diagnosesData_json_1 = __importDefault(require("../data/diagnosesData.json"));
const diagnoses = diagnosesData_json_1.default;
const getDiagnoses = () => {
    return diagnoses;
};
exports.default = {
    getDiagnoses
};
