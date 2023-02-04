import React from 'react';
import companyImage from '../assets/company2.png';
import companyImage1 from '../assets/company.png';
import companyImage2 from '../assets/company3.png';

const Materials = () => {
  return (
    <div className='materialsContainer' id='полезные'>
        <div className="material_info">
            <h1>Полезные материалы</h1>
            <p>Мы постоянно проводим научные изыскания, направленные на увеличение эффективности животноводства и птицеводства
            Собрали для вас полезные исследования наших научных сотрудников, схемы кормления и другие материалы, которые пригодятся для лучших результатов на вашем предприятии.
            </p>
        </div>
        <div className="material_benefits">
            <section>
                <img src={companyImage} alt="companyImage" />
                <h2>Витамины для кур-несушек</h2>
                <span>12 мая 2022</span>
                <p>Витамины необходимы курам яичного направления для нормальной жизнедеятельности и увеличения продуктивного периода.</p>
                <button>
                Читать дальше
                </button>
            </section>
            <section>
                <img src={companyImage1} alt="companyImage" />
                <h2>Производство кормадля сельсхоз животных</h2>
                <span>12 мая 2022</span>
                <p>Витамины необходимы курам яичного направления для нормальной жизнедеятельности и увеличения продуктивного периода.</p>
            </section>
            <section>
                <img src={companyImage2} alt="companyImage" />
                <h2>Полнорационные корма</h2>
                <span>12 мая 2022</span>
                <p>Витамины необходимы курам яичного направления для нормальной жизнедеятельности и увеличения продуктивного периода.</p>
            </section>
        </div>
    </div>
  )
}

export default Materials
