import React from 'react';
import Navbar from "../components/Navbar";
import pig from '../assets/pig.png';
import backElements from '../assets/backElements.png';

const Landing = () => {
  return (
    <div className='landingContainer'>
        <Navbar />
        <div className="intro">
            <h1>Мегакорм — залог здоровья животных </h1>
            <p>Высококачественный сбалансированный комбикорм, содержащий суточную потребность в питательных веществах, обеспечивает здоровье животных и птиц, повышает эффективность хозяйства.</p>
            <section className="buttons">
                <button className='btn'>Где купить</button>
                <button className='btn'>Калькулятор</button>
            </section>
        </div>
        <div className="pig_blob">
            <img src={pig} alt="pig" />
        </div>
       
       <img className='backElements' src={backElements} alt="" />
       <img className='backElements1' src={backElements} alt="" />
    </div>
  )
}

export default Landing