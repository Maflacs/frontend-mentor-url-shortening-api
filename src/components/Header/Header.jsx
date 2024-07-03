import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from "../../assets/img/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}><img src={logo} alt="" /></div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
        <hr className={styles.horizontalLine} />
        <ul className={styles.auth}>
            <li><a href="#login">Login</a></li>
            <li><a href="#signup" className={styles.signup}>Sign Up</a></li>
        </ul>
      </nav>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </header>
  );
};

export default Header;
