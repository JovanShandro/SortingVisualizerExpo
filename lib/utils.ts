export const capitalize = (str: string) => {
  return str.replace(/^\w/, c => c.toUpperCase());
};

export const generateRandomArray = () => {
  const array = [];
  for (let i = 0; i < 50; i++) {
    array.push(randomNumber(7, 120));
  }
  return array;
};

const randomNumber = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};
