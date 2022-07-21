'use strict';
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

  const maxAmount = Math.max(...value.map((val) => val.amount));

  value.map((info) => {
    const chartBar = document.createElement('div');
    const dailyTotal = document.createElement('p');
    const graphBar = document.createElement('div');
    const weekDay = document.createElement('p');

    chartBar.classList.add('chart__bar');
    dailyTotal.classList.add('daily__total');
    graphBar.classList.add(info.amount === maxAmount ? 'bar__max' : 'bar');
    weekDay.classList.add('week__day');

    dailyTotal.textContent = `$${info.amount}`;
    weekDay.textContent = info.day;

    graphBar.style.height = `${info.amount * 0.28}rem`;

    chartEl.appendChild(chartBar);
    chartBar.appendChild(dailyTotal);
    chartBar.appendChild(graphBar);
    chartBar.appendChild(weekDay);

    const chartDivs = document.querySelectorAll('.chart__bar');

    chartDivs.forEach((el) => {
      el.addEventListener('mouseenter', function (e) {
        if (e.target.classList.contains('chart__bar')) {
          el.classList.add('chart__bar-hover');
        }
      });
    });

    chartDivs.forEach((el) => {
      el.addEventListener('mouseleave', function (e) {
        if (e.target.classList.contains('chart__bar-hover')) {
          el.classList.remove('chart__bar-hover');
        }
      });
    });
  });
})();
