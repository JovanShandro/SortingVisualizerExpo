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
  | "heap";

export const algorithmsData: { [key in AlgorithmNames]: Algorithm } = {
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
  }
};

export const allAlgorithms = Object.keys(algorithmsData);

export const ColumnBlueColors = ["#0C4043", "#28A5AD"];
export const ColumnRedColors = ["#F61E1E", "#BF0606"];
