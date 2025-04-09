import { getAllProducts } from "../lib/api"
import Dropdown from "../components/Filters"
import styles from "../styles/Page.module.css"
import ProductPageContent from "@/components/Products"

export const metadata = {
  title: "Ecomarce",
  description:
   "Shop our top picks—quality products with free shipping over $50",
  openGraph: {
    title: "Premium E-commerce Store",
  },
  alternates: {
    canonical: "",
  },
}

export default async function ProductsPage() {
  try {
    const products = await getAllProducts();
    return (
      <main className={styles.main}>
        <ProductPageContent products={products} />
      </main>
    );
  } catch (error) {
    console.error("Error in ProductsPage:", error);
    return (
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.errorState}>
            <h2>Something went wrong</h2>
            <p>We're having trouble loading the products. Please try again later.</p>
          </div>
        </section>
      </main>
    );
  }
}