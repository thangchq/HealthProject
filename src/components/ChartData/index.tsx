import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -300, max: 300 })),
      borderColor: '#8FE9D0',
      backgroundColor: '#8FE9D0',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -300, max: 300 })),
      borderColor: '#FFCC21',
      backgroundColor: '#FFCC21',
    },
  ],
}; 

const Chart = () => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
        text: 'BODY RECORD',
        color: 'white',
      },
      legend: {
        position: 'top' as const,
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        ticks: {
          color: '#FFFFFF'
        },
        grid: {
          color: '#777777'
        }
      }
    },
  };
  
  return (
    <Line  options={options} data={data} />
  )
}

export default Chart
