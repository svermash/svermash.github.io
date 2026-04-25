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
import sourceDATA from "../data/Hiray_Test_DATA2.json";

// Register everything required
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
  ChartDataLabels
);

export default function StackedBarGraph2() {
  const labels = sourceDATA.map(student => student.Roll);

  const totals = sourceDATA.map(student => ({
  //  internal: student.Internal.reduce((a:number, b:number) => a + b, 0),
    practical: student.lab.reduce((a:number, b:number) => a + b, 0),
    theory: student.Theory.reduce((a:number, b:number) => a + b, 0),
  }));

  const data = {
    labels,
    datasets: [
    //   {
    //     label: 'Total Internal',
    //     data: totals.map(s => s.internal),
    //     backgroundColor: 'rgba(0,96,200,0.8)',
    //   },
      {
        label: 'Total Practical',
        data: totals.map(s => s.practical),
        backgroundColor: 'rgba(219, 63, 19, 0.8)',
      },
      {
        label: 'Total Theory',
        data: totals.map(s => s.theory),
        backgroundColor: 'rgba(44,158,0,1)',
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      ticks: {
        font: {
          size: 8   
        },
        autoSkip: false,    
        maxRotation: 0,    
        minRotation: 0     
      }
    },
      y: { stacked: true, beginAtZero: true }
    },
    plugins: {
      tooltip: { enabled: true },
      legend: { display: true, position: "top" },
      datalabels: {
        display: false,
      }
    }
  };

  return (
    <div className="whole-body">
        
      <div className="Tchart-box">
        <p>test_2</p>
        <Bar data={data} options={options as any} />
      </div>
    </div>
  );
}
