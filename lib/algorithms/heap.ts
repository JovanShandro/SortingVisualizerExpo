import { swap } from "../utils";

let heapsize = -1;

export default (array: number[], animations: number[][]) => {
  build_max_heap(array, animations);
  for (let i = array.length - 1; i > 0; i--) {
    // Swapping indexes 0 and i
    animations.push([0, 0]);
    animations.push([0, 0]);
    animations.push([0, i]);
    swap(array, 0, i);
    heapsize--;
    max_heapify(array, 0, animations);
  }
};

const build_max_heap = (array: number[], animations: number[][]) => {
  heapsize = array.length;
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    max_heapify(array, i, animations);
  }
};

const max_heapify = (array: number[], i: number, animations: number[][]) => {
  let largest = i;
  const l = 2 * i + 1;
  const r = 2 * i + 2;

  // Comparing indexes l and i
  if (l < heapsize) {
    animations.push([l, i]);
    animations.push([l, i]);
    animations.push([l, l]);
    if (array[l] > array[i]) {
      largest = l;
    }
  }
  // Comparing indexes r and largest
  if (r < heapsize) {
    animations.push([r, largest]);
    animations.push([r, largest]);
    animations.push([r, r]);
    if (array[r] > array[largest]) {
      largest = r;
    }
  }

  if (largest !== i) {
    // Swapping indexes i and largest
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([i, largest]);
    swap(array, i, largest);
    max_heapify(array, largest, animations);
  }
};
