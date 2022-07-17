'use strict';
const totalBalanceEl = document.querySelector('.total__balance');
const monthTotalEl = document.querySelector('.month__total__amount');
const percentageEl = document.querySelector('.percentage');
const chartBarEl = document.querySelectorAll('.chart__bar');
const chartEl = document.querySelector('.chart');

let value;

(async () => {
  const getData = async () => {
    const response = await fetch('./data.json');
    const data = await response.json();
    value = data;
    return data;
  };
  await getData();
  const valuesArr = value.map((val) => val.amount);
  const daysArr = value.map((days) => days.day);

  const createHTML = function (ElClass) {
    for (let info of value) {
      const html = `
      <div class="chart__bar">
      <p class="daily__total">$${info.amount}</p>
      <div class="${ElClass}"></div>
      <p class="week__day">${info.day}</p>
      </div>
      `;
      chartEl.insertAdjacentHTML('afterbegin', html);
    }
  };

  createHTML('bar');

  chartBarEl.forEach((el) => {
    el.addEventListener('mouseenter', function (e) {
      if (e.target.classList.contains('chart__bar')) {
        el.classList.add('chart__bar-hover');
      }
    });
  });

  chartBarEl.forEach((el) => {
    el.addEventListener('mouseleave', function (e) {
      if (e.target.classList.contains('chart__bar-hover')) {
        el.classList.remove('chart__bar-hover');
      }
    });
  });
})();
