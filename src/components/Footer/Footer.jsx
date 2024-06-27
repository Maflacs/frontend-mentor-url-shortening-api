import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Shortly</div>
      <div className={styles.links}>
        <div>
          <h4>Features</h4>
          <ul>
            <li><a href="#link-shortening">Link Shortening</a></li>
            <li><a href="#branded-links">Branded Links</a></li>
            <li><a href="#analytics">Analytics</a></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#developers">Developers</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#our-team">Our Team</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.socials}>
        <a href="#facebook">Facebook</a>
        <a href="#twitter">Twitter</a>
        <a href="#pinterest">Pinterest</a>
        <a href="#instagram">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
