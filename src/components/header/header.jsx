import styles from './header.module.css';

function Header({ toggleSlideshowVisibility, slideshowVisibility }) {
  return (
    <header className={styles.header}>
      <img src="src/assets/logo.svg" className={styles.logo} alt="logo" />
      {slideshowVisibility ? (
        <button
          onClick={toggleSlideshowVisibility}
          className={styles.startSlideshow}
        >
          STOP SLIDESHOW
        </button>
      ) : (
        <button
          onClick={toggleSlideshowVisibility}
          className={styles.startSlideshow}
        >
          START SLIDESHOW
        </button>
      )}
    </header>
  );
}

export default Header;
