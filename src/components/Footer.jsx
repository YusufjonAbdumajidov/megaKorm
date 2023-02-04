import React from 'react';
import email from '../assets/footerIcons/email.png';
import telegram from '../assets/footerIcons/telegram.png';
import tiktok from '../assets/footerIcons/tiktok.png';
import vk from '../assets/footerIcons/vk.png';

const Footer = () => {
  return (
    <footer >
       <div className="logo">
        <h1>OOO «Мегамикс Комбикорм»</h1>
        <span>© 2010—2021</span>
       </div>
       <p>согласие на обработку персоналных данных</p>
       <div className="icons">
        <img src={email} alt="email" />
        <img src={telegram} alt="telegram" />
        <img src={tiktok} alt="tiktok" />
        <img src={vk} alt="vk" />
       </div>
    </footer>
  )
}

export default Footer
