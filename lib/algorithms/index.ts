import insertion_sort from "./insertion";
import bubble_sort from "./bubble";
import { AlgorithmNames } from "../../constants";

const algorithms: { [key in AlgorithmNames]: Function } = {
  insertion: insertion_sort,
  bubble: bubble_sort,
  merge: () => {},
  selection: () => {},
  heap: () => {},
  quick: () => {}
};

export default algorithms;
