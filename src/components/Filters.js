"use client"

import { useState } from 'react';
import styles from '../styles/Filters.module.css';

export default function FilterPanel({ isVisible }) {
  const categories = [
    { id: 'customOption', name: 'CUSTOMIZABLE', type: 'checkbox' },
    { id: 'idealFor', name: 'IDEAL FOR', options: ['All'] },
    { id: 'occasion', name: 'OCCASION', options: ['All'] },
    { id: 'work', name: 'WORK', options: ['All'] },
    { id: 'fabric', name: 'FABRIC', options: ['All'] },
    { id: 'segment', name: 'SEGMENT', options: ['All'] },
    { id: 'suitableFor', name: 'SUITABLE FOR', options: ['All'] },
    { id: 'rawMaterials', name: 'RAW MATERIALS', options: ['All'] },
    { id: 'pattern', name: 'PATTERN', options: ['All'] },
  ];

  const [openCategory, setOpenCategory] = useState({});

  const handleToggle = (id) => {
    setOpenCategory({
      ...openCategory,
      [id]: !openCategory[id]
    });
  };

  if (!isVisible) return null;

  return (
    <div className={`${styles.panelContainer} ${!isVisible ? styles.panelHidden : ''}`}>
      {categories.map((item) => (
        <div key={item.id} className={styles.categoryBlock}>
          {item.type === 'checkbox' ? (
            <div className={styles.checkboxItem}>
              <input 
                type="checkbox" 
                id={item.id} 
                className={styles.checkboxInput} 
              />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          ) : (
            <>
              <div 
                className={styles.categoryHeader} 
                onClick={() => handleToggle(item.id)}
              >
                <span>{item.name}</span>
                <span className={styles.arrowIcon}>
                  {openCategory[item.id] ? '▼' : '▶'}
                </span>
              </div>
              <div className={`${styles.optionList} ${openCategory[item.id] ? styles.showOptions : ''}`}>
                {item.options.map((opt, i) => (
                  <div key={i} className={styles.optionItem}>
                    {opt}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
