import React from 'react';
import pig from '../assets/pig.webp';
import rabbit from '../assets/rabbit.webp';
import cow from '../assets/cow.webp';
import duck from '../assets/duck.webp';
import chicken from '../assets/chiken.webp';
import chickens from '../assets/chikens.webp';
import book from '../assets/book.png';
import loc from '../assets/loc.png';
import calculator from '../assets/calculator.png';


const About = () => {
  return (
    <div className='aboutContainer'>
        <h1>Почему стоит выбрать «Мегакорм»</h1>
        <div className="container">
            <section>
                <img src={pig} alt="pig" />
                <p>Эффективный и полезный</p>
                <span>Зерно, белковые вещества, микроэлементы и витамины. Есть все для быстрого роста здоровых животных</span>
            </section>
            <section>
                <img src={chicken} alt="chicken" />
                <p>Легко купить. Легко использовать</p>
                <span>Выпускается в удобной упаковке. Доступен в большинстве регионов с доставкой.
                <br/>
                    <span>
                        <img src={loc} alt="location" />
                        Карта дистрибьютеров
                    </span>
                </span>
            </section>
            <section>
                <img src={cow} alt="cow" />
                <p>Просто добиться результата</p>
                <span>Состав каждого продукта соответствует биологическим потребностям конкретного вида животных. Повышенный иммунитет, сохранение и прирост поголовья
                    <br/>
                   <span>
                        <img src={calculator} alt="calculator" />
                        Рассчитайте необходимый объем
                    </span>
                </span>
            </section>
            <section>
                <img src={rabbit} alt="rabbit" />
                <p>Гарантия качества ингредиентов</p>
                <span>Используем только качественное сырье от лучших отечественных и мировых поставщиков. Более 280 критериев для анализа качества входящего сырья и готовой продукции
                <br/>
                    <span>
                        <img src={book} alt="book" />
                        Узнайте больше в нашей статье о производстве
                    </span>
                </span>
            </section>
            <section>
                <img src={chickens} alt="chickens" />
                <p>Безопасно и экологично</p>
                <span>Качество продукции соответствует международным стандартам ISO и GMP+. Без гормонов и стимуляторов роста. Нет повода для беспокойства.</span>
            </section>
            <section>
                <img src={duck} alt="duck" />
                <p>Ассортимент для всех и каждого</p>
                <span>Выпускаем смеси для кормления разных видов сельскохозяйственных животных, учитывая пол и возраст. Есть и универсальные корма.</span>
            </section>
        </div>
    </div>
  )
}

export default About
