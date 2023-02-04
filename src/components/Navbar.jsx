import React, { useRef } from 'react';
import Logo from "../assets/logo.png";
import menuIcon from '../assets/menuBtn.png';
import exitBtn from '../assets/exitButton.png'

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <nav>
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <ul ref={navRef}>
            <li><a href="#наши">наши корма</a></li>
            <li><a href="#калькулятор">калькулятор</a></li>
            <li><a href="#как">как купить</a></li>
            <li><a href="#нас">о нас</a></li>
            <li><a className='lastBtn' href="#полезные">полезные статьи</a></li>
            <img className=' nav-btn nav-close-btn' src={exitBtn} alt="exitBtn" onClick={showNavbar}/>
        </ul>
        <img className='nav-btn openBtn' src={menuIcon} alt="menuIcon"  onClick={showNavbar}/>
       
    </nav>
  )
}

export default Navbar