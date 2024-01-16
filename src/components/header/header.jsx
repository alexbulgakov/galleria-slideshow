import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img src="src/assets/logo.svg" className={styles.logo} alt="logo" />
      <a className={styles.startSlideshow} href="#">
        START SLIDESHOW
      </a>
    </header>
  );
}

export default Header;
