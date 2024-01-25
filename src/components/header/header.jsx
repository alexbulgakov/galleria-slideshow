import styles from './header.module.css';

function Header({
  toggleSlideshowVisibility,
  slideshowVisibility,
  setCurrentPainting,
}) {
  function onClose() {
    setCurrentPainting({});
    toggleSlideshowVisibility();
  }

  return (
    <header className={styles.header}>
      <img
        src="src/assets/shared/logo.svg"
        className={styles.logo}
        alt="logo"
      />
      {slideshowVisibility ? (
        <button
          onClick={toggleSlideshowVisibility}
          className={styles.startSlideshow}
        >
          STOP SLIDESHOW
        </button>
      ) : (
        <button className={styles.startSlideshow} onClick={onClose}>
          START SLIDESHOW
        </button>
      )}
    </header>
  );
}

export default Header;
