import React from "react";
import styles from "./AdvancedStatistics.module.css";
import br from "../../assets/img/icon-brand-recognition.svg";
import dr from "../../assets/img/icon-detailed-records.svg";
import fc from "../../assets/img/icon-fully-customizable.svg";

const AdvancedStatistics = () => {
  return (
    <section className={styles.advancedStatistics}>
      <div className={styles.h2Container}>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className={styles.horizontalLine}></div>
      <div className={styles.cards}>
        <div className={styles.cardBr}>
          <div className={styles.imgContainer}>
            <img src={br} alt="icon" />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
        <div className={styles.cardDr}>
          <div className={styles.imgContainer}>
            <img src={dr} alt="icon" />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className={styles.cardFc}>
          <div className={styles.imgContainer}>
            <img src={fc} alt="icon" />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvancedStatistics;
