"use client"

import React, { useEffect, useState } from 'react';
import styles from "../styles/Footer.module.css"
import gpayIcon from '../assets/google_pay.png';
import mastercardIcon from '../assets/card.png';
import paypalIcon from '../assets/paypal.png';
import amexIcon from '../assets/amex.png';
import applePayIcon from '../assets/pay.png';
import instagramIcon from '../assets/instagram_logo.png';
import linkedinIcon from '../assets/linkedin.png';
import UsaFlag from '../assets/usa.png';
import Arrow from '../assets/arrow-right.png';
import Image from 'next/image';

export default function ModernFooter() {
  const [userEmail, setUserEmail] = useState('');
  const [activeSection, setActiveSection] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const screenLimit = 768;

  useEffect(() => {
    const updateScreenSize = () => setIsSmallScreen(window.innerWidth <= screenLimit);
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const toggleMenu = (menu) => {
    if (!isSmallScreen) return;
    setActiveSection(activeSection === menu ? null : menu);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Email:', userEmail);
    setUserEmail('');
  };

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.topContainer}>
        <div className={styles.subscribeBox}>
          <h3 className={styles.title}>BE THE FIRST TO KNOW</h3>
          <p className={styles.subtitle}>Sign up for updates from mettā muse.</p>
          <form className={styles.formWrapper} onSubmit={handleFormSubmit}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className={styles.emailField}
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.submitButton}>SUBSCRIBE</button>
          </form>
        </div>

        <div className={styles.detailsBox}>
          <div className={styles.contactDetails}>
            <h3 className={styles.title}>CONTACT US</h3>
            <p className={styles.text}>+44 221 133 5360</p>
            <p className={styles.text}>customercare@mettamuse.com</p>
          </div>

          <div className={styles.currencyBlock}>
            <h3 className={styles.title}>CURRENCY</h3>
            <div className={styles.flagWrapper}>
              <Image src={UsaFlag} alt="USA Flag" />
              <span className={styles.currencyText}>USD</span>
            </div>
            <p className={styles.currencyNote}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
      </div>

      <div className={styles.sectionDivider}></div>

      <div className={styles.linkArea}>
        <div className={styles.menuBlock}>
          <h2 className={styles.brandHeader} onClick={() => toggleMenu('brand')}>
            <p>mettā muse</p>
            <Image src={Arrow} alt="Toggle" className={`${styles.icon} ${activeSection === 'brand' ? styles.flipped : ''}`} />
          </h2>
          {(isSmallScreen ? activeSection === 'brand' : true) && (
            <ul className={styles.navLinks}>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Stories</a></li>
              <li><a href="/">Artisans</a></li>
              <li><a href="/">Boutiques</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">EU Compliances Docs</a></li>
            </ul>
          )}
        </div>

        <div className={styles.menuBlock}>
          <h3 className={styles.title} onClick={() => toggleMenu('quick')}>
            <p>QUICK LINKS</p>
            <Image src={Arrow} alt="Toggle" className={`${styles.icon} ${activeSection === 'quick' ? styles.flipped : ''}`} />
          </h3>
          {(isSmallScreen ? activeSection === 'quick' : true) && (
            <ul className={styles.navLinks}>
              <li><a href="/">Orders & Shipping</a></li>
              <li><a href="/">Join/Login as a Seller</a></li>
              <li><a href="/">Payment & Pricing</a></li>
              <li><a href="/">Return & Refunds</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms & Conditions</a></li>
            </ul>
          )}
        </div>

        <div className={styles.menuBlock}>
          <h3 className={styles.title} onClick={() => toggleMenu('follow')}>
            <p>FOLLOW US</p>
            <Image src={Arrow} alt="Toggle" className={`${styles.icon} ${activeSection === 'follow' ? styles.flipped : ''}`} />
          </h3>
          {(isSmallScreen ? activeSection === 'follow' : true) && (
            <div>
              <div className={styles.socialGroup}>
                <a href="/" className={styles.socialItem}><Image src={instagramIcon} width={51} height={30} alt="Instagram" /></a>
                <a href="/" className={styles.socialItem}><Image src={linkedinIcon} width={51} height={30} alt="LinkedIn" /></a>
              </div>

              <div className={styles.paymentsBox}>
                <h3 className={styles.title}>mettā muse ACCEPTS</h3>
                <div className={styles.paymentIcons}>
                  <Image src={gpayIcon} width={51} height={30} alt="Google Pay" />
                  <Image src={mastercardIcon} width={51} height={30} alt="Mastercard" />
                  <Image src={paypalIcon} width={51} height={30} alt="PayPal" />
                  <Image src={amexIcon} width={51} height={30} alt="Amex" />
                  <Image src={applePayIcon} width={51} height={30} alt="Apple Pay" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.footerNote}>© 2023 mettamuse. All rights reserved.</div>
    </footer>
  );
}
