// import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';

// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

// import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';

// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

// import '@pnotify/core/dist/BrightTheme.css';

// defaultModules.set(PNotifyMobile, {});

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   info ({
//   text: 'Моя перша нотифікація!',
//   delay: 5,
//   });
// })

// import {Chart} from 'chart.js';

// const data = {

// labels: ['Rent', 'Food', 'Transportation', 'Entertainment'],

// datasets: [{

// label: 'Expenses',

// data: [800, 500, 200, 300],

// backgroundColor: [

// 'rgb(255, 99, 132)',

// 'rgb(54, 162, 235)',

// 'rgb(255, 205, 86)',

// 'rgb(75, 192, 192)'

// ],

// hoverOffset: 4

// }]

// };

// const config = {

// type: 'doughnut',

// data: data,

// options: {}

// };

// const myChart = new Chart(

// document.getElementById('myChart'),

// config

// );

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "donut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Brown", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 109, 63, 5, 92, 73, 0],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
