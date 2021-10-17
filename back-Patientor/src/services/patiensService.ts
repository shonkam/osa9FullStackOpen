import patientsData from '../data/patientsData.json';
import { PatientEntry, NonSensitivePatientEntry } from '../types';

const patients: Array<PatientEntry> = patientsData;

const getPatients = (): NonSensitivePatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

export default {
  getPatients
};