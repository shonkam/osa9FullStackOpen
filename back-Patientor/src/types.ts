export type Gender = 'male' | 'female' | 'other';
export type NonSensitivePatientEntry = Omit<PatientEntry, 'ssn'>;

export interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

export interface DiagnoseEntry {
  code: string;
  name: string;
  latin?: string
}