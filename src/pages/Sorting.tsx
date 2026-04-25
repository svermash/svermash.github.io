import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import { useState } from 'react';
import sourceDATA from "../data/shuffled_DATA.json";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
  ChartDataLabels
);



const complexityInfo = {
  bubble: {
    name: "Bubble Sort",
    time: "O(n²)",
    space: "O(1)"
  },
  selection: {
    name: "Selection Sort",
    time: "O(n²)",
    space: "O(1)"
  },
  insertion: {
    name: "Insertion Sort",
    time: "O(n²)",
    space: "O(1)"
  },
  shell: {
    name: "Shell Sort",
    time: "Best O(n log² n), Worst O(n²)",
    space: "O(1)"
  },
  quick: {
    name: "Quick Sort",
    time: "Best/Average O(n log n), Worst O(n²)",
    space: "O(log n)"
  },
  radix: {
    name: "Radix Sort",
    time: "O(n x k)",
    space: "O(n + k)"
  }
};

export default function Sorting() {
  const [students, setStudents] = useState(sourceDATA);
  const [algorithm, setAlgorithm] = useState("bubble");
  const [isSorting, setIsSorting] = useState(false);
  const [searchRoll, setSearchRoll] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [currentSearchIndex, setCurrentSearchIndex] = useState(-1);
  const [foundIndex, setFoundIndex] = useState(-1);
  const [comparingIndices, setComparingIndices] = useState([]);
  const [speed, setSpeed] = useState(1);
  const [showSpeedOptions, setShowSpeedOptions] = useState(false);

  const labels = students.map(student => student.Roll);
  const totals = students.map(student => ({
    practical: student.lab.reduce((a, b) => a + b, 0),
    theory: student.Theory.reduce((a, b) => a + b, 0),
  }));

  const data = {
    labels,
    datasets: [
      {
        label: 'Total Practical',
        data: totals.map(s => s.practical),
        backgroundColor: totals.map((_, i) => {
          if (foundIndex === i) return 'rgba(255, 215, 0, 1)';
          if (currentSearchIndex === i) return 'rgba(59, 131, 246, 0.9)';
          if (comparingIndices.includes(i)) return 'rgba(59, 131, 246, 0.9)';
          return 'rgba(219, 63, 19, 0.8)';
        }),
      },
      {
        label: 'Total Theory',
        data: totals.map(s => s.theory),
        backgroundColor: totals.map((_, i) => {
          if (foundIndex === i) return 'rgba(255, 215, 0, 0.9)';
          if (currentSearchIndex === i) return 'rgba(59, 130, 246, 0.9)';
          if (comparingIndices.includes(i)) return 'rgba(59, 130, 246, 0.9)';
          return 'rgba(44,158,0,1)';
        }),
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        ticks: { font: { size: 8 }, autoSkip: false, maxRotation: 0, minRotation: 0 }
      },
      y: { stacked: true, beginAtZero: true }
    },
    plugins: {
      tooltip: { enabled: true },
      legend: { display: true, position: "top" },
      datalabels: { display: false }
    },
    animation: {
      duration: 0,
  }
  };

  const totalMarks = (s) =>
    s.lab.reduce((x, y) => x + y, 0) +
    s.Theory.reduce((x, y) => x + y, 0);

  const getDelay = () => {
    return 500 / speed;
  };

  const bubbleSortSteps = (arr) => {
    const steps = [];
    const a = [...arr];
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length - i - 1; j++) {
        steps.push({ array: [...a], comparing: [j, j + 1] });
        if (totalMarks(a[j]) > totalMarks(a[j + 1])) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          steps.push({ array: [...a], comparing: [j, j + 1] });
        }
      }
    }
    return steps;
  };

  const selectionSortSteps = (arr) => {
    const steps = [];
    const a = [...arr];
    for (let i = 0; i < a.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < a.length; j++) {
        steps.push({ array: [...a], comparing: [minIndex, j] });
        if (totalMarks(a[j]) < totalMarks(a[minIndex])) minIndex = j;
      }
      if (minIndex !== i) {
        steps.push({ array: [...a], comparing: [i, minIndex] });
        [a[i], a[minIndex]] = [a[minIndex], a[i]];
        steps.push({ array: [...a], comparing: [i, minIndex] });
      }
    }
    return steps;
  };

  const insertionSortSteps = (arr) => {
    const steps = [];
    const a = [...arr];
    for (let i = 1; i < a.length; i++) {
      let key = a[i];
      let j = i - 1;
      while (j >= 0 && totalMarks(a[j]) > totalMarks(key)) {
        steps.push({ array: [...a], comparing: [j, j + 1] });
        a[j + 1] = a[j];
        steps.push({ array: [...a], comparing: [j, j + 1] });
        j--;
      }
      a[j + 1] = key;
      steps.push({ array: [...a], comparing: [j + 1] });
    }
    return steps;
  };

  const shellSortSteps = (arr) => {
    const steps = [];
    const a = [...arr];
    for (let gap = Math.floor(a.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < a.length; i++) {
        let temp = a[i];
        let j = i;
        while (j >= gap && totalMarks(a[j - gap]) > totalMarks(temp)) {
          steps.push({ array: [...a], comparing: [j - gap, j] });
          a[j] = a[j - gap];
          steps.push({ array: [...a], comparing: [j - gap, j] });
          j -= gap;
        }
        a[j] = temp;
        steps.push({ array: [...a], comparing: [j] });
      }
    }
    return steps;
  };

  const quickSortSteps = (arr) => {
    const steps = [];
    const a = [...arr];

    const qs = (low, high) => {
      if (low >= high) return;
      const pivotValue = totalMarks(a[high]);
      let i = low;
      for (let j = low; j < high; j++) {
        steps.push({ array: [...a], comparing: [i, j, high] });
        if (totalMarks(a[j]) < pivotValue) {
          [a[i], a[j]] = [a[j], a[i]];
          steps.push({ array: [...a], comparing: [i, j, high] });
          i++;
        }
      }
      steps.push({ array: [...a], comparing: [i, high] });
      [a[i], a[high]] = [a[high], a[i]];
      steps.push({ array: [...a], comparing: [i, high] });
      qs(low, i - 1);
      qs(i + 1, high);
    };
    qs(0, a.length - 1);
    return steps;
  };

  const radixSortSteps = (arr) => {
    const steps = [];
    const a = [...arr];
    const getMax = () => Math.max(...a.map(s => totalMarks(s)));
    const getDigit = (num, place) => Math.floor(num / Math.pow(10, place)) % 10;

    const maxDigits = getMax().toString().length;

    for (let d = 0; d < maxDigits; d++) {
      const buckets = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < a.length; i++) {
        steps.push({ array: [...a], comparing: [i] });
        const digit = getDigit(totalMarks(a[i]), d);
        buckets[digit].push(a[i]);
      }
      const merged = [].concat(...buckets);
      a.splice(0, a.length, ...merged);
      steps.push({ array: [...a], comparing: [] });
    }
    return steps;
  };

  const runSort = async () => {
    if (isSorting) return;
    setIsSorting(true);
    setCurrentSearchIndex(-1);
    setFoundIndex(-1);

    let steps;
    if (algorithm === "bubble") steps = bubbleSortSteps(students);
    if (algorithm === "selection") steps = selectionSortSteps(students);
    if (algorithm === "insertion") steps = insertionSortSteps(students);
    if (algorithm === "shell") steps = shellSortSteps(students);
    if (algorithm === "quick") steps = quickSortSteps(students);
    if (algorithm === "radix") steps = radixSortSteps(students);

    for (let i = 0; i < steps.length; i++) {
      setStudents(steps[i].array);
      setComparingIndices(steps[i].comparing);
      await new Promise(res => setTimeout(res, getDelay()));
    }

    setComparingIndices([]);
    setIsSorting(false);
  };

  const runLinearSearch = async () => {
    if (isSearching || !searchRoll.trim()) return;
    
    setIsSearching(true);
    setFoundIndex(-1);
    setCurrentSearchIndex(-1);

    const rollToFind = searchRoll.trim();
    let found = false;
    
    for (let i = 0; i < students.length; i++) {
      setCurrentSearchIndex(i);
      await new Promise(res => setTimeout(res, getDelay()));
      
      if (students[i].Roll === rollToFind) {
        setFoundIndex(i);
        setCurrentSearchIndex(-1);
        found = true;
        break;
      }
    }
    
    if (!found) {
      setCurrentSearchIndex(-1);
    }
    
    setIsSearching(false);
  };

  const resetSearch = () => {
    setCurrentSearchIndex(-1);
    setFoundIndex(-1);
    setSearchRoll("");
  };

  return (
    <div className="whole-body">

      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          disabled={isSorting}
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="shell">Shell Sort</option>
          <option value="quick">Quick Sort</option>
          <option value="radix">Radix Sort</option>
        </select>

        <button onClick={runSort} disabled={isSorting}>
          {isSorting ? "Sorting..." : "Start Sort"}
        </button>

        <div style={{ position: "relative" }}>
          <button onClick={() => setShowSpeedOptions(!showSpeedOptions)}>
            Speed: {speed}x
          </button>
          {showSpeedOptions && (
            <div style={{
              position: "absolute",
              top: "100%",
              left: 0,
              marginTop: "5px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              background: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "5px",
              zIndex: 1000
            }}>
              <button onClick={() => { setSpeed(0.5); setShowSpeedOptions(false); }}>0.5x</button>
              <button onClick={() => { setSpeed(1); setShowSpeedOptions(false); }}>1x</button>
              <button onClick={() => { setSpeed(2); setShowSpeedOptions(false); }}>2x</button>
              <button onClick={() => { setSpeed(3); setShowSpeedOptions(false); }}>3x</button>
              <button onClick={() => { setSpeed(5); setShowSpeedOptions(false); }}>5x</button>
            </div>
          )}
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "center" }}>
        <input
          type="text"
          value={searchRoll}
          onChange={(e) => setSearchRoll(e.target.value)}
          placeholder="Enter Roll Number"
          disabled={isSearching || isSorting}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        />
        <button onClick={runLinearSearch} disabled={isSearching || isSorting || !searchRoll.trim()}>
          {isSearching ? "Searching..." : "Linear Search"}
        </button>
        <button onClick={resetSearch} disabled={isSearching || isSorting}>
          Reset Search
        </button>
        {foundIndex !== -1 && (
          <span style={{ color: "green", fontWeight: "bold" }}>
            Found at position {foundIndex + 1}!
          </span>
        )}
        {!isSearching && foundIndex === -1 && currentSearchIndex === -1 && searchRoll && (
          <span style={{ color: "red", fontWeight: "bold" }}>
            Not found
          </span>
        )}
      </div>

        <div style={{ display:"flex", justifyContent:"center", marginBottom:"10px" }}>
        <div
            style={{
            padding: "10px",
            border: "1px solid #000000ff",
            borderRadius: "6px",
            background: "#a2a4c7ff",
            fontSize: "16px",
            textAlign: "center"
            }}
        >
            <strong>{complexityInfo[algorithm].name}</strong><br />
            Time Complexity: {complexityInfo[algorithm].time}<br />
            Space Complexity: {complexityInfo[algorithm].space}
        </div>
        </div>

      <div className="Tchart-box">
        <Bar data={data} options={options} />
      </div>

    </div>
  );
}