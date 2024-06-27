import React from 'react';
import styles from './ShortenLink.module.css';

const ShortenLink = () => {
  return (
    <section className={styles.shortenLink}>
      <input type="text" placeholder="Shorten a link here..." />
      <button>Shorten It!</button>
    </section>
  );
};

export default ShortenLink;
