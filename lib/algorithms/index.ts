import insertion_sort from "./insertion";
import bubble_sort from "./bubble";
import selection_sort from "./selection";
import { AlgorithmNames } from "../../constants";

const algorithms: { [key in AlgorithmNames]: Function } = {
  insertion: insertion_sort,
  bubble: bubble_sort,
  selection: selection_sort,
  merge: () => {},
  heap: () => {},
  quick: () => {}
};

export default algorithms;
