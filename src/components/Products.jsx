import React, { useState } from 'react';
import chicken1 from "../assets/chicken1.png";
import packageImage from '../assets/package.png';
import { BsChevronRight } from 'react-icons/bs';
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


import Modal from './Modal';

const allProducts = [
    {animal: chicken1, package: packageImage, header: "Комбикорм для бройлеров", info: `Изготовлен из отборных зерновых продуктов с высокими показателями питательности.  Содержит фитобиотики для повышения иммунитета и ферменты для пищеварения.
    «Мегакорм» обеспечивает высокую продуктивность птиц и темпы роста, так как содержит весь необходимый комплекс витаминов и микроэлементов, оптимальный для бройлеров.`, smallText: `Красивый цвет тушки`, blobColor: `#F7B86F`, smallBlob: `#F9C1C6`},
    {animal: rabbit, package: package1, header: "Комбикорм для кроликов", info: `Изготовлен из отборных злаковых смесей и
    высококачественного, экологически чистогорастительного сырья. Содержит продукты переработки масличных и бобовых культур - для обогащения протеинами и повышения питательности.`, smallText: `Много травяноймуки`, blobColor: `#AA89C0`, smallBlob: `#F7B86F`},
    {animal: chicken2, package: package2, header: "Комбикорм для кур-несушек", info: `Полностью покрывает потребность кур-несушек во всех питательных веществах и обеспечивает высокую яйценоскость. Изготовлен из отборных зерновых продуктов, а также продуктов переработки сои и подсолнечника. Для улучшения перевариваемости корма в состав добавлены ферменты.
    Содержит белки животного происхождения, аминокислоты, макро-и микроэлементы, а также комплекс витаминов. 
    `, smallText: `Яркий желток`, blobColor: `#F7B86F`, smallBlob: `#F9C1C6`},
    {animal: cow, package: package3, header: "Комбикорм для крупного рогатого скота", info: `Уникальный рецепт обеспечивает оптимальный рацион для обеспечения высоких показателей надоя.  Изготовлен из отборных злаковых смесей и высококачественного, экологически чистого растительного сырья. Для обогащения протеином и повышения питательности в состав добавлены продукты переработки масличных и бобовых культур.
    Включает все необходимые витамины, макро- и микроэлементы, а также специальные добавки и органические микроэлементы, укрепляющие иммунитет. 
    `, smallText: `Оптимальный рацион`, blobColor: `#92C9AA`, smallBlob: `#99E1EF`},
    {animal: chicken4, package: package4, header: "Комбикорм для уток", info: `Обеспечивает лучшие результаты по выращиванию здоровой птицы и сохраняет желудочно-кишечный тракт птиц от патологий. Изготовлен из зерновых культур, оптимально подобранных под особенности организма водоплавающих. Высокая питательность. За счет содержания продуктов переработки подсолнечника и сои увеличена питательность.
    Содержит полный набор ферментов, витаминов, макро– и микроэлементов для здоровья птиц.`, smallText: `Ферментный
    комплекс`, blobColor: `#99E1EF`,  smallBlob: `#F9C1C6`},
    {animal: pig2, package: pigProduct, header: "Комбикорм для свиней", info: `Укрепляет иммунную систему животных и положительно влияет на слизистую оболочку желудочно-кишечного тракта. Изготовлен из качественной зерновой смеси оптимальной для усвоения организмом свиней. За счет содержания продуктов переработки подсолнечника и сои увеличена питательность.
    Для увеличения поедаемости, в состав добавлены фитобиотики и натуральные ароматизаторы. Включает в себя макро- и микроэлементы, ферменты, витамины, а также специальные добавки. 
    `, smallText: `Баланс аминокислот`, blobColor: `#F9C1C6`, smallBlob: `#FFDF64`},
    {animal: chicken3, package: package5, header: "Комбикорм для перепелов ", info: `Изготовлен из качественной зерновой смеси, оптимальной для роста и здоровья перепелов. За счет содержания продуктов переработки подсолнечника и сои увеличена питательность. Содержит ферменты для улучшения перевариваемости корма, а также натуральные каротиноиды для ярких желтков, здорового цвета кожи и привлекательного вида мяса.
    Содержит белки животного происхождения, макро и -микроэлементы и витамины. 
    `, smallText: `Удобная гранула`, blobColor: `#FFDF64`, smallBlob: `#C2E0CF`},
    {animal: chicken5, package: package6, header: "Комбикорм для индейки", info: `Повышает иммунитет организма птицы к заболеваниям и укрепляет общее здоровье. Изготовлен из злаковой смеси, оптимальной для потребностей индеек. За счет содержания продуктов переработки подсолнечника и сои увеличена питательность. Для улучшения перевариваемости корма в состав добавлены ферменты.
    Содержит оптимальный для индеек комплекс витаминов, микро- и макроэлементов. 
    `, smallText: `Усвояемые аминокислоты`, blobColor: `#F585A7`, smallBlob: `#99E1EF`},
];


const Products = () => {
    const [ counter, setCounter ] = useState(0);
    const [ openModal, setOpenModal ] = useState(false);
 

    const changeProduct = arg => {
        if(typeof arg === 'number'){
            setCounter(() => arg);
        }else{
            if(arg === "increase"){
                if(counter === 7){
                    setCounter(() => 0);
                }else setCounter(() => counter + 1)
            }
            if(arg === "decrease"){
                if(counter === 0){
                    setCounter(() => 7);
                }else setCounter(() => counter - 1)
            }
        }
    }

  return <>
    <div className='productsContainer' id='наши'>
        <section className="container">
            <span className='leftBtn' onClick={() => changeProduct("decrease")}  ><BsChevronRight /></span>
            <div className="info_images" style={{backgroundColor: `${allProducts[counter].blobColor}`}}>
                <img className='chicken1' src={allProducts[counter].animal} alt="bubble" />
                <section style={{backgroundColor: `${allProducts[counter].smallBlob}`}} className={counter % 2 === 0 ? "smallBubble" : "smallBubble_top"}>
                    <p>{allProducts[counter].smallText}</p>
                </section>
                <img className='packageImage' src={allProducts[counter].package} alt="bubble" />
            </div>
            <div className="info_text" >
                <section className="circles">
                    <span onClick={() => changeProduct(0)} className='circle'></span>
                    <span onClick={() => changeProduct(1)}  className='circle'></span>
                    <span onClick={() => changeProduct(2)}  className='circle'></span>
                    <span onClick={() => changeProduct(3)}  className='circle'></span>
                    <span onClick={() => changeProduct(4)}  className='circle'></span>
                    <span onClick={() => changeProduct(5)}  className='circle'></span>
                    <span onClick={() => changeProduct(6)}  className='circle'></span>
                    <span onClick={() => changeProduct(7)}  className='circle'></span>
                </section>
                <h1>{allProducts[counter].header}</h1>
                <p>{allProducts[counter].info}</p>

                <div className="product_buttons">
                    <button>Рассчитать</button>
                    <button onClick={() => setOpenModal(!openModal)}>Подробнее о продукте <BsChevronRight /> </button>
                </div>
            </div>
            <span className='rightBtn' onClick={() => changeProduct("increase")}  ><BsChevronRight /></span>
        </section>
        <img className='backElements' src={backElements} alt="" />
    <img className='backElements1' src={backElements} alt="" />
    </div>
    { openModal ?  <Modal openModal={openModal} setOpenModal={setOpenModal}/> : ""} 

  
  </>
}

export default Products
