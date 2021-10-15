interface Person {
  height: number;
  weight: number;
}

const calculateBmi = (height: number, weight: number) => {

  weight * 2;
  height * 2;

  const BMI = (weight / (height ** 2) * 10000);

  if (BMI <= 16.0) {
    return "Underweight (Severe thinness)";
  }
  else if (16.0 <= BMI && BMI < 17) {
    return "Underweight (Moderate thinness)";
  }
  else if (17.0 <= BMI && BMI < 18.5) {
    return "Underweight (Mild thinness)";
  }
  else if (18.5 <= BMI && BMI < 25) {
    return "Normal range (Healthy weight)";
  }
  else if (25.0 <= BMI && BMI < 30) {
    return "Overweight (Pre-obese)";
  }
  else if (30.0 <= BMI && BMI < 35) {
    return "Obese (Class I)";
  }
  else if (35 <= BMI && BMI < 40) {
    return "Obese (Class II)";
  }
  else if (BMI <= 40) {
    return "Obese (Class III)";
  }
  else {
    return "Something went wrong when calculating BMI";
  }
};

const parseArguments = (args: Array<string>): Person => {
  if (args.length < 4) throw new Error('Please, provide first height and then weight');
  if (args.length > 4) throw new Error('Please, provide only height and weight');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    };
  }
  else {
    throw new Error("Please, provide only numbers");
  }
};

try {
  const { height, weight } = parseArguments(process.argv);
  console.log(calculateBmi(height, weight));
} catch (error: unknown) {
  console.log(error);
}

export { calculateBmi };