import { data } from '../../utils/data';

import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <img src="src/assets/logo.svg" className={styles.logo} alt="logo" />
      <a className={styles.startSlideshow} href="#">
        START SLIDESHOW
      </a>
    </div>
  );
}

export default Header;
