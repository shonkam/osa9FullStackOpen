interface Results {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  averageTime: number;
}

const calculateExercises = (exerciseArray: Array<number>, userTarget: number): Results => {

  let daysWhenTrained = 0;
  let sum = 0;

  for (let i = 0; i < exerciseArray.length; i++) {
    sum = sum + exerciseArray[i];
    if (exerciseArray[i] !== 0) {
      daysWhenTrained++;
    }
  }
  let trainingRating = 1;
  const average = sum / exerciseArray.length;

  if (average < 1.5) {
    trainingRating = 1;
  }
  else if (average < 2.5 && average >= 1.5) {
    trainingRating = 2;
  }

  else if (average >= 2.5) {
    trainingRating = 3;
  }

  let desc = '';
  if (trainingRating === 1) {
    desc = "C'mon, pick it up!";
  }
  else if (trainingRating === 2) {
    desc = "Not too bad, but you can do better!";
  }
  else if (trainingRating === 3) {
    desc = "Fantastic job!";
  }

  let targetMet: boolean;
  if (average >= userTarget) {
    targetMet = true;
  }
  else {
    targetMet = false;
  }

  return {
    periodLength: exerciseArray.length,
    trainingDays: daysWhenTrained,
    success: targetMet,
    rating: trainingRating,
    ratingDescription: desc,
    target: userTarget,
    averageTime: average
  };
};

interface exerciseArgs {
  exerciseArray: Array<number>;
  userTarget: number;
}
const argumentsParse = (args: Array<string>): exerciseArgs => {
  if (args.length < 3) throw new Error('Please, provide at least the training amount of one day and your target score');
  const valueArray: Array<number> = [];
  let target: number;
  if (!isNaN(Number(args[2]))) {
    target = Number(args[2]);
  }
  else {
    throw new Error("Please, provide only numbers");
  }
  let y = 3;
  while (args[y] !== undefined) {
    if (!isNaN(Number(args[y]))) {
      const number = Number(args[y]);
      valueArray.push(number);
    }
    else {
      throw new Error("Please, provide only numbers");
    }
    y++;
  }
  return {
    exerciseArray: valueArray,
    userTarget: target
  };
};

try {
  const { exerciseArray, userTarget } = argumentsParse(process.argv);
  console.log(calculateExercises(exerciseArray, userTarget));
} catch (error: unknown) {
  console.log(error);
}

export { calculateExercises };