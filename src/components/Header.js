import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Logo from "../assets/Logo.png";
import SearchIcon from "../assets/search-normal.png";
import WishlistIcon from "../assets/heart.png";
import CartIcon from "../assets/shopping-bag.png";
import ProfileIcon from "../assets/profile.png";
import LanguageArrow from "../assets/arrow-left.png";
import MenuIcon from "../assets/hamburger.png";

export default function Header() {
  const headerIcons = [
    { src: SearchIcon, alt: "Search" },
    { src: WishlistIcon, alt: "Wishlist" },
    { src: CartIcon, alt: "Cart" },
    { src: ProfileIcon, alt: "Profile", hideOnMobile: true },
    { src: LanguageArrow, alt: "Language", text: "ENG", hideOnMobile: true }
  ];

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.topBar}>
          <div className={styles.logoSection}>
            <div className={styles.menuIcon}>
              <Image src={MenuIcon} alt="Menu" width={20} height={20} />
            </div>
            <Link href="/" className={styles.logoLink}>
              <Image src={Logo} alt="Logo" width={35} height={35} />
            </Link>
          </div>

          <div className={styles.logoSection}>
            <Link href="/" className={styles.logoLink}>
              <span className={styles.brandText}>LOGO</span>
            </Link>
          </div>

          <div className={styles.iconWrapper}>
            {headerIcons.map((item, idx) => (
              <div
                key={idx}
                className={`${styles.iconBox} ${item.hideOnMobile ? styles.hideMobile : ""}`}
              >
                {item.text && <span className={styles.langText}>{item.text}</span>}
                <Image src={item.src} alt={item.alt} width={24} height={24} className={styles.iconImg} />
                {item.badge && <span className={styles.badge}>{item.badge}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.navMenu}>
          <Link href="/" className={styles.navItem}>SHOP</Link>
          <Link href="/" className={styles.navItem}>SKILLS</Link>
          <Link href="/" className={styles.navItem}>STORIES</Link>
          <Link href="/" className={styles.navItem}>ABOUT</Link>
          <Link href="/" className={styles.navItem}>CONTACT US</Link>
        </div>
      </div>
    </header>
  );
}
