import './App.css'
import datas from './data.json'

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
// import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'left',
    },
    title: {
      display: true,
      text: 'Yarımilin qazancı',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
    }
  },
};


export const data = {
  labels: datas.map((item) => item.Ay),
  datasets: [
    {
      label: 'Kar',
      data: datas.map((item) => item.Kar),
      backgroundColor: 'rgba(0, 179, 42, 0.4)',
      borderRadius: 2,
    },
    {
      label: 'Zərər',
      data: datas.map((item) => item.Zərər),
      backgroundColor: 'rgba(255, 57, 43, 0.4)',
      borderRadius: 2,
    },
  ],
};

export default function App() {
  return (
    <div className="App">
      <Line options={options} data={data} />
      <Bar options={options} data={data} />
    </div>
  )

}
