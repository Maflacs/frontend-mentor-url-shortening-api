import React from 'react';
import styles from './Hero.module.css';
import heroImg from "../../assets/img/illustration-working.svg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
      <h1>More than just shorter links</h1>
      <p>Build your brands recognition and get detailed insights on how your links are performing.</p>
      <button className={styles.getStarted}>Get Started</button>
      </div>
      <div className={styles.img}>
        <img className={styles.heroImg} src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
