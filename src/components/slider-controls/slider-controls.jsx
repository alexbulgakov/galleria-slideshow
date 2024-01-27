import { motion } from 'framer-motion';

import styles from './slider-controls.module.css';

function SliderControls({ currentPainting, currentIndex, paginate, total }) {
  const progress = (currentIndex / (total - 1)) * 100;

  return (
    <div className={styles.controlsAndProgress}>
      <div className={styles.progressBarContainer}>
        <motion.div
          animate={{ width: `${progress}%` }}
          className={styles.progressBar}
          transition={{ duration: 0.5 }}
          initial={{ width: 0 }}
        />
      </div>
      <div className={styles.sliderControls}>
        <div className={styles.sliderInfo}>
          <h3>{currentPainting.name}</h3>
          <p className={styles.artist}>{currentPainting.artist.name}</p>
        </div>
        <div className={styles.sliderButtons}>
          <button
            className={styles.sliderPrevButton}
            onClick={() => paginate(-1)}
          ></button>
          <button
            className={styles.sliderNextButton}
            onClick={() => paginate(1)}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default SliderControls;
