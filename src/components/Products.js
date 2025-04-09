"use client";

import { useState } from 'react';
import ProductGrid from "./Product";
import SortDropdown from "./Dropdown";
import FilterSidebar from "./Filters";
import styles from "../styles/Page.module.css";
import FilterToggle from "./Toggle";

export default function ProductPageContent({ products }) {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <section className={styles.pageWrapper}>
            <div className={styles.navTrail}>
               <p>HOME</p> 
               <p className={styles.navDivider}></p>
               <p className={styles.currentPage}>PRODUCT</p> 
            </div>

            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>DISCOVER OUR PRODUCTS</h1>
                <p className={styles.pageSubtitle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facere dignissimos itaque ducimus,
                    dolorem amet reprehenderit asperiores.
                </p>
            </div>

            <div className={styles.filterBar}>
                <FilterToggle
                    onToggle={handleToggleSidebar}
                    isVisible={showSidebar}
                />
                <div className={styles.verticalSeparator}></div>
                <div className={styles.sortWrapper}>
                    <SortDropdown />
                </div>
            </div>

            <div className={styles.contentLayout}>
                <FilterSidebar isVisible={showSidebar} />
                <ProductGrid isFilterVisible={showSidebar} products={products || []} />
            </div>
        </section>
    );
}
