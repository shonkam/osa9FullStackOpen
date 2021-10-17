import express from 'express';
import patiensService from '../services/patiensService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patiensService.getPatients());
});

export default router;