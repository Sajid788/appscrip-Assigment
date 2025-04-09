import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Product.module.css";
import { CiHeart } from "react-icons/ci";

export default function ProductGrid({ products = [], isFilterVisible }) {
  if (!products || products.length === 0) {
    return (
      <div className={styles.noData}>
        <p>No products found. Please try a different filter or check back later.</p>
      </div>
    );
  }

  return (
    <div className={isFilterVisible ? styles.gridWithSidebar : styles.gridWithoutSidebar}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <div className={styles.link}>
            <div className={styles.imgSection}>
              <div className={styles.imgWrapper}>
                {product.image ? (
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={300}
                    height={300}
                    className={styles.productImg}
                    priority={product.id <= 8}
                  />
                ) : (
                  <div className={styles.placeholder}>
                    <span>{product.title.charAt(0)}</span>
                  </div>
                )}
              </div>
              {product.onSale && <div className={styles.badge}>SALE</div>}
            </div>
            <h2 className={styles.title}>{product.title}</h2>
            <div className={styles.details}>
              <p className={styles.loginMessage}>
                <span className={styles.loginLink}>Sign in </span>
                or Create an account to see pricing
              </p>
            </div>
            <button className={styles.wishlistBtn} aria-label="Add to wishlist">
            <CiHeart />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
