export interface Algorithm {
  title: string;
  info: AlgorithmInfo;
}

export interface AlgorithmInfo {
  best: string;
  average: string;
  worst: string;
  memory: string;
  stable: boolean;
  extra?: string;
}

export type AlgorithmNames =
  | "merge"
  | "insertion"
  | "selection"
  | "bubble"
  | "quick"
  | "heap"
  | "counting"
  | "radix";

export const algorithms: { [key in AlgorithmNames]: Algorithm } = {
  merge: {
    title: "Merge Sort",
    info: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
      memory: "O(n)",
      stable: true
    }
  },
  insertion: {
    title: "Insertion Sort",
    info: {
      best: "O(n)",
      average: "O(n^2)",
      worst: "O(n^2)",
      memory: "O(1)",
      stable: true
    }
  },
  selection: {
    title: "Selection Sort",
    info: {
      best: "O(n^2)",
      average: "O(n^2)",
      worst: "O(n^2)",
      memory: "O(1)",
      stable: false
    }
  },
  bubble: {
    title: "Bubble Sort",
    info: {
      best: "O(n)",
      average: "O(n^2)",
      worst: "O(n^2)",
      memory: "O(1)",
      stable: true
    }
  },
  quick: {
    title: "Quick Sort",
    info: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n^2)",
      memory: "O(log n)",
      stable: false
    }
  },
  heap: {
    title: "Heap Sort",
    info: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
      memory: "O(1)",
      stable: false
    }
  },
  counting: {
    title: "Counting Sort",
    info: {
      best: "O(n)",
      average: "O(n + k)",
      worst: "O(n + k)",
      memory: "O(n + k)",
      extra: "k: range of non-negative key values",
      stable: true
    }
  },
  radix: {
    title: "Radix Sort (LSD)",
    info: {
      best: "O(n)",
      average: "O(n + k)",
      worst: "O(n * k)",
      memory: "O(n + k)",
      extra: "k: number of bits required to store each key",
      stable: true
    }
  }
};
