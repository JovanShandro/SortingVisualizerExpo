import { swap } from "../utils";

export default (array: number[], animations: number[][]) => {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      // Comparing indexes j and j+1
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);

      if (array[j] > array[j + 1]) {
        // Animate swapping values
        animations.push([j, j + 1]);
        swap(array, j, j + 1);
        swapped = true;
      } else {
        // No animation at all
        animations.push([j, j]);
      }
    }
    if (!swapped) {
      break;
    }
  }
};
