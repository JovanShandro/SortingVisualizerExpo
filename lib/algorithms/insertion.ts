import { swap } from "../utils";

export default (array: number[], animations: number[][]) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      // Comparing indexes j and j-1
      animations.push([j, j - 1]);
      animations.push([j, j - 1]);

      if (array[j] < array[j - 1]) {
        // Animate swapping values
        animations.push([j, j - 1]);
        swap(array, j, j - 1);
      } else {
        // No animation at all
        animations.push([j, j]);
        break;
      }
    }
  }
};
