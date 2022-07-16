'use strict';
const totalBalanceEl = document.querySelector('.total__balance');
const monthTotalEl = document.querySelector('.month__total__amount');
const percentageEl = document.querySelector('.percentage');

let value;

const getData = async () => {
  const response = await fetch('./data.json');
  const data = await response.json();
  value = data;
  return data;
};

await getData();
const valuesArr = value.map((val) => val.amount);
const daysArr = value.map((days) => days.day);
console.log(valuesArr, daysArr);
