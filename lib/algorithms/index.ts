import insertion_sort from "./insertion";
import { AlgorithmNames } from "../../constants";

const algorithms: { [key in AlgorithmNames]: Function } = {
  insertion: insertion_sort,
  merge: () => {},
  selection: () => {},
  bubble: () => {},
  heap: () => {},
  quick: () => {}
};

export default algorithms;
