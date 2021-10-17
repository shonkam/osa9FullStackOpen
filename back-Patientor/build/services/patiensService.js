"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patientsData_json_1 = __importDefault(require("../data/patientsData.json"));
const patients = patientsData_json_1.default;
const getPatients = () => {
    return patients;
};
exports.default = {
    getPatients
};
