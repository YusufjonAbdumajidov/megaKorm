import React, { useState } from 'react';
import globeIcon from '../assets/globe.png';
import companyImage from '../assets/company2.png';
import companyImage1 from '../assets/company.png';
import companyImage2 from '../assets/company3.png';

const AboutCompany = () => {
  const [ backImage, setBackImage ] = useState(companyImage);
  const changeBack = (num) => {
    if(num === 1){
        setBackImage(companyImage)
    }else if(num === 2){
        setBackImage(companyImage1)
    }else setBackImage(companyImage2)
  }
  return (
    <div className='companyContainer' id='нас'>
        <div className="images_container">
            <div style={{background: `url(${backImage})`}} className="image"></div>
            <section>
                <div onClick={() => changeBack(1)}></div>
                <div onClick={() => changeBack(2)}></div>
                <div onClick={() => changeBack(3)}></div>
            </section>
        </div>
        <div className="text_container">
            <h1>О компании</h1>
            <p>Кормовая компания «МЕГАМИКС» – крупнейший российский производитель премиксов и комбикормов для всех видов сельскохозяйственных животных и птиц. 
            Наше производство – самое высокотехнологичное в отрасли, а аналитический центр «МЕГАМИКС» является одним из европейских лидеров по количественному и качественному контролю кормовых компонентов.
            Мы – первый производитель премиксов в России, сертифицированный по модулю GMP+FSA. Наши требования к качеству и безопасности собственной продукции и поддержанию деловой репутации – выше принятых на рынке. 
            </p>
            <div className="ratings">
                <section>
                    <h2>>30%</h2>
                    <p>рынка кормов </p>
                </section>
                <section>
                    <h2>23</h2>
                    <p>года на рынке</p>
                </section>
                <section>
                    <h2>400+</h2>
                    <p>дистрибьютеров</p>
                </section>
            </div>
            <button>
                <img src={globeIcon} alt="globeIcon" />
                На сайт Мегамикс
            </button>
        </div>
    </div>
  )
}

export default AboutCompany
