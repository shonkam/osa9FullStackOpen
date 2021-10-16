import express from 'express';
import { calculateExercises } from './exerciseCalculator';
import { calculateBmi } from './bmiCalculator';
const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {

  if (!isNaN(Number(req.query.height)) && !isNaN(Number(req.query.weight))) {
    const response = calculateBmi(Number(req.query.height), Number(req.query.weight));

    res.send({
      weight: Number(req.query.weight),
      height: Number(req.query.height),
      bmi: response
    });
  }
  else {
    res.status(400).send({ error: "malformatted parameters" });
  }
});


app.post('/exercise', (req, res) => {

  if (!req.body.daily_exercises || !req.body.target) {
    res.status(400).send({ error: "parameters missing" });
  }
  console.log(req.body.target);
  if (isNaN(Number(req.body.target))) {
    res.status(400).send({ error: "malformatted parameters" });
  }

  const exerciseArray: Array<number> = req.body.daily_exercises;
  const userTarget: number = req.body.target;

  for (let i = 0; i < (exerciseArray.length); i++) {
    console.log(exerciseArray[i]);
    if (isNaN(Number(exerciseArray[i]))) {
      res.status(400).send({ error: "malformatted parameters" });
    }
  }

  res.status(200).json(calculateExercises(exerciseArray, userTarget));
});


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});