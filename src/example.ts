// Example file with intentionally poor formatting to test Prettier

type User = {
  name: string;
  email: string;
  age: number;
  isActive: boolean;
};

const createUser = (name: string, email: string, age: number, isActive: boolean = true): User => {
  return { name, email, age, isActive };
};

function calculateTotalScore(scores: number[]): number {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total;
}
