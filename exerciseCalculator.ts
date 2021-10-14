type ratingScale = 1 | 2 | 3

interface Results {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: ratingScale;
  ratingDescription: string;
  target: ratingScale;
  averageTime: number;
}

const calculateExercises = (args: Array<number>, userTarget: ratingScale): Results => {

  let daysWhenTrained = 0;
  let sum = 0;

  for (var i = 0; i < args.length; i++) {
    sum = sum + args[i];
    if (args[i] !== 0) {
      daysWhenTrained++;
    }

  }
  let trainingRating: ratingScale;
  const average = sum / args.length;

  if (average < 1.5) {
    trainingRating = 1;
  }
  else if (average < 2.5 && average >= 1.5) {
    trainingRating = 2;
  }

  else if (average >= 2.5) {
    trainingRating = 3;
  }

  let desc: string;
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
  console.log('func');

  return {
    periodLength: args.length,
    trainingDays: daysWhenTrained,
    success: targetMet,
    rating: trainingRating,
    ratingDescription: desc,
    target: userTarget,
    averageTime: average
  }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
console.log(calculateExercises([3, 5, 2, 4.5, 0, 5, 6], 3));