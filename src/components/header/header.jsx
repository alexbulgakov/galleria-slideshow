import { data } from '../../utils/data';

import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <img src={data[0].images.thumbnail} />
    </div>
  );
}

export default Header;
