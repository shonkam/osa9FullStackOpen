import patientsData from '../data/patientsData.json';
import { v1 as uuid } from 'uuid';
import { PatientEntry, NonSensitivePatientEntry, NewPatientEntry } from '../types';

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

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const NewPatientEntry = {
    id: uuid(),
    ...entry
  };
  patients.push(NewPatientEntry);
  return NewPatientEntry;
};

export default {
  getPatients,
  addPatient
};