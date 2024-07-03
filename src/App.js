import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ShortenLink from './components/ShortenLink/ShortenLink';
import AdvancedStatistics from './components/AdvancedStatistics/AdvancedStatistics';
import Footer from './components/Footer/Footer';
import styles from './App.css';
import Boost from './components/Boost/Boost';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <ShortenLink />
      <AdvancedStatistics />
      <Boost />
      <Footer />
    </div>
  );
};

export default App;
