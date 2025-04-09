"use client"

import { useEffect, useState } from "react";
import styles from "../styles/Toggle.module.css"

export default function ToggleControl({ onToggle, isVisible }) {

  const screenLimit = 768;
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobileView(window.innerWidth <= screenLimit);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.controlWrapper}>
      <div className={styles.countDisplayWrapper}>
        <span className={styles.countText}>3425 ITEMS</span>
      </div>
      <div className={styles.buttonGroup}>
        <div>
          <span className={styles.arrowIndicator}>
            {isVisible ? '←' : '→'}
          </span>
        </div>

        <button
          onClick={onToggle}
          className={styles.filterButton}
        >
          {mobileView ? 'FILTER' : (isVisible ? 'HIDE FILTER' : 'SHOW FILTER')}
        </button>
      </div>
    </div>
  );
}
