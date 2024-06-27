import React from 'react';
import styles from './AdvancedStatistics.module.css';

const AdvancedStatistics = () => {
  return (
    <section className={styles.advancedStatistics}>
      <h2>Advanced Statistics</h2>
      <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Brand Recognition</h3>
          <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.</p>
        </div>
        <div className={styles.card}>
          <h3>Detailed Records</h3>
          <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>
        <div className={styles.card}>
          <h3>Fully Customizable</h3>
          <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
      </div>
    </section>
  );
};

export default AdvancedStatistics;
