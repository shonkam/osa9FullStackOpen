import express from 'express';
import patiensService from '../services/patiensService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patiensService.getPatients());
});

router.post('/', (req, res) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const { ssn, name, dateOfBirth, gender, occupation } = req.body;
  const newPatientEntry = patiensService.addPatient(
    {
      ssn,
      name,
      dateOfBirth,
      gender,
      occupation
    }
  );
  res.json(newPatientEntry);
});

export default router;