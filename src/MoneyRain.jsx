import React, { useEffect } from 'react';

const MoneyRain = () => {
  useEffect(() => {
    const moneyRain = document.getElementById('money-rain');

    function createMoney() {
      const money = document.createElement('div');
      money.classList.add('money');
      money.innerText = '$';
      money.style.left = `${Math.random() * 100}vw`;
      money.style.animationDuration = `${Math.random() * 3 + 3}s`;
      money.style.fontSize = `${Math.random() * 10 + 30}px`;
      money.style.opacity = Math.random();
      moneyRain.appendChild(money);

      setTimeout(() => {
        money.remove();
      }, 7000);
    }

    const interval = setInterval(createMoney, 500);

    return () => clearInterval(interval);
  }, []);

  return <div id="money-rain"></div>;
};

export default MoneyRain;