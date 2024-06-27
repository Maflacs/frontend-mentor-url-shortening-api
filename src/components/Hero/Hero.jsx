import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>More than just shorter links</h1>
      <p>Build your brands recognition and get detailed insights on how your links are performing.</p>
      <button className={styles.getStarted}>Get Started</button>
    </section>
  );
};

export default Hero;
