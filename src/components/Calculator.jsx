import React, { useState } from 'react';
import first from '../assets/calculatorImages/6.png';
import second from '../assets/calculatorImages/5.png';
import third from '../assets/calculatorImages/4.png';
import fourth from '../assets/calculatorImages/7.png';
import fifth from '../assets/calculatorImages/8.png';
import sixth from '../assets/calculatorImages/1.png';
import seventh from '../assets/calculatorImages/3.png';
import eight from '../assets/calculatorImages/2.png';
import chicken from '../assets/chicken1.png';

import rabbit from '../assets/rabbit.png';
import package1 from '../assets/package1.png';
import chicken2 from '../assets/chicken2.png';
import package2 from '../assets/package2.png';
import cow from '../assets/cow.png';
import package3 from '../assets/package3.png';
import chicken4 from '../assets/chicken4.png';
import package4 from '../assets/package4.png';
import pig2 from '../assets/pig2.png';
import pigProduct from '../assets/pigProduct.png';
import chicken3 from '../assets/chicken3.png';
import package5 from '../assets/package5.png';
import chicken5 from '../assets/chicken5.png';
import package6 from '../assets/package6.png';
import backElements from '../assets/backElements.png';

const allProducts = [
  {animal: chicken,},
  {animal: rabbit, },
  {animal: cow, },
  {animal: chicken4,},
  {animal: pig2,},
  {animal: chicken3,},
  {animal: chicken5,},
  {animal: chicken4,},
];

const Calculator = () => {
  const [ counter, setCounter ] = useState(0);
  return (
    <div className='calculatorContainer'>
        <div className="text_wrapper">
            <h1>Калькулятор корма</h1>
            <p>Выберите животное, введите количество голов и получите точный расчет количества корма, необходимого для вашего поголовья. Все просто. </p>
            <section className="icons">
              <section>
                <img onClick={()=> setCounter(0)} src={sixth} alt="first" />
                <img onClick={()=> setCounter(1)} src={second} alt="first" />
                <img onClick={()=> setCounter(2)} src={third} alt="first" />
                <img onClick={()=> setCounter(3)} src={fourth} alt="first" />
              </section>
              <section>
                <img onClick={()=> setCounter(4)} src={fifth} alt="first" />
                <img onClick={()=> setCounter(5)} src={sixth} alt="first" />
                <img onClick={()=> setCounter(6)} src={seventh} alt="first" />
                <img onClick={()=> setCounter(7)} src={eight} alt="first" />
              </section>
            </section>
            <h2>30 голов <br/>
            92 кг корма</h2>
        </div>
        <div className="image_wrapper">
            <img src={allProducts[counter].animal} alt="" />
            <section className="info_wrapper">
              <section>
                <h2>32 кг</h2>
                <p>рост 15-28 дней</p>
              </section>
              <section>
                <h2>12 кг</h2>
                <p>старат 0-14 дней</p>
              </section>
              <section>
                <h2>48 кг</h2>
                <p>финиш 29 дней</p>
              </section>
            </section>
        </div>
    </div>
  )
}

export default Calculator
