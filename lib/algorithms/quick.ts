import { swap } from "../utils";

export default (array: number[], animations: number[][]) => {
  _quicksort(array, 0, array.length - 1, animations);
};

const _quicksort = (
  array: number[],
  p: number,
  r: number,
  animations: number[][]
) => {
  if (p < r) {
    const q = partition(array, p, r, animations);
    _quicksort(array, p, q - 1, animations);
    _quicksort(array, q + 1, r, animations);
  }
};

const partition = (
  array: number[],
  p: number,
  r: number,
  animations: number[][]
): number => {
  let x = array[r];
  let i = p - 1;

  for (let j = p; j <= r - 1; j++) {
    // Comparing indexes j and r
    animations.push([j, r]);
    animations.push([j, r]);
    animations.push([0, 0]);
    if (array[j] < x) {
      i++;
      // Swapping indexes j and i
      animations.push([0, 0]);
      animations.push([0, 0]);
      animations.push([j, i]);
      swap(array, i, j);
    }
  }
  // Swapping indexes i+1 and r
  animations.push([0, 0]);
  animations.push([0, 0]);
  animations.push([r, i + 1]);
  swap(array, i + 1, r);
  return i + 1;
};
