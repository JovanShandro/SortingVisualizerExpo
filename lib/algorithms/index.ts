import insertion_sort from "./insertion";
import bubble_sort from "./bubble";
import selection_sort from "./selection";
import heap_sort from "./heap";
import quick_sort from "./quick";
import { AlgorithmNames } from "../../constants";

const algorithms: { [key in AlgorithmNames]: Function } = {
  insertion: insertion_sort,
  bubble: bubble_sort,
  selection: selection_sort,
  heap: heap_sort,
  quick: quick_sort,
  merge: () => {}
};

export default algorithms;
