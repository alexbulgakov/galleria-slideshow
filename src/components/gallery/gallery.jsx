import { columns } from 'src/assets/data/constants';

import styles from './gallery.module.css';

function Gallery({ toggleSlideshowVisibility, setCurrentPainting, paintings }) {
  return (
    <main className={styles.gallery}>
      {columns.map((column, colIndex) => (
        <div className={styles.column} key={colIndex}>
          {paintings.map(
            (painting, index) =>
              column.includes(painting.name) && (
                <div
                  onClick={() => {
                    setCurrentPainting(painting);
                    toggleSlideshowVisibility();
                  }}
                  className={styles.painting}
                  key={index}
                >
                  <div className={styles.background}></div>
                  <img
                    src={painting.images.thumbnail}
                    className={styles.img}
                    alt={painting.name}
                  />
                  <h2 className={styles.name}>{painting.name}</h2>
                  <p className={styles.artist}>{painting.artist.name}</p>
                  <div className={styles.backgroundHover}></div>
                </div>
              ),
          )}
        </div>
      ))}
    </main>
  );
}

export default Gallery;
