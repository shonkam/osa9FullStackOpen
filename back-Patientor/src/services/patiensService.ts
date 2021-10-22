import patientsData from '../data/patientsData.json';
import { v1 as uuid } from 'uuid';
import { PatientEntry, NonSensitivePatientEntry, NewPatientEntry } from '../types';
import toNewPatientEntry from '../utils';

const patients: PatientEntry[] = patientsData.map(obj => {
  const object = toNewPatientEntry(obj) as PatientEntry;
  object.id = obj.id;
  return object;
});

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