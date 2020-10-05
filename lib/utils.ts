export const capitalize = (str: string) => {
  return str.replace(/^\w/, c => c.toUpperCase());
};

export const generateRandomArray = () => {
  const array = [];
  for (let i = 0; i < 25; i++) {
    array.push(randomNumber(7, 120));
  }
  return array;
};

const randomNumber = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min) + min);
};

export const swap = (
  array: any[],
  first_index: number,
  second_index: number
) => {
  const tmp = array[first_index];
  array[first_index] = array[second_index];
  array[second_index] = tmp;
};
