import styles from './slider-controls.module.css';

function SliderControls({ currentPainting, paginate }) {
  return (
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
  );
}

export default SliderControls;
