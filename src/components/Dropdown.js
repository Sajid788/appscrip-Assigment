"use client"

import { useState } from "react"
import styles from "../styles/Dropdown.module.css"

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState("recommended")

  const sortOptions = [
    { label: "Recommended", value: "recommended" },
    { label: "Newest First", value: "newest" },
    { label: "Popular", value: "popular" },
    { label: "Price: High to Low", value: "price_desc" },
    { label: "Price: Low to High", value: "price_asc" },
  ]

  const handleSortChange = (value) => {
    setSelectedSort(value)
    setIsOpen(false)
  }

  const getSelectedLabel = () => {
    if (selectedSort === "recommended") return "Recommended"
    return sortOptions.find((opt) => opt.value === selectedSort)?.label || "Featured"
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.toggleBtn}>
        <span>{getSelectedLabel()?.toUpperCase()}</span>
        <svg
          className={`${styles.arrowIcon} ${isOpen ? styles.arrowOpen : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <ul className={styles.list}>
            {sortOptions.map((option) => (
              <li
                key={option.value}
                className={`${styles.item} ${selectedSort === option.value ? styles.active : ""}`}
                onClick={() => handleSortChange(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
