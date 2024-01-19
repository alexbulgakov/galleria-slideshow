import styles from './slider-controls.module.css';

function SliderControls({ paginate }) {
  return (
    <div className={styles.sliderControls}>
      <div className={styles.sliderInfo}>
        <h3>Name</h3>
        <p>author</p>
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
