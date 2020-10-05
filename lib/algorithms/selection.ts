import { swap } from "../utils";

export default (array: number[], animations: number[][]) => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minindex = i;
    for (let j = i + 1; j < n; j++) {
      // Comparing indexes j and minindex
      animations.push([j, minindex]);
      animations.push([j, minindex]);
      // No animation at all
      animations.push([j, j]);

      if (array[j] < array[minindex]) {
        minindex = j;
      }
    }
    // Pop last pair and animate swapping values
    animations.pop();
    animations.push([i, minindex]);
    swap(array, i, minindex);
  }
};
