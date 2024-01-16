import styles from './gallery.module.css';

function Gallery({ paintings }) {
  const columns = [
    [
      'Starry Night',
      'The Storm on the Sea of Galilee',
      'Lady with an Ermine',
      'The Boy in the Red Vest',
    ],
    [
      'Girl with a Pearl Earring',
      'The Great Wave off Kanagawa',
      'The Night Café',
      'Arnolfini Portrait',
    ],
    ['Guernica', 'Van Gogh Self-portrait', 'Mona Lisa'],
    [
      'Penitent Magdalene',
      'The Sleeping Gypsy',
      'The Basket of Apples',
      'The Swing',
    ],
  ];

  return (
    <main className={styles.gallery}>
      {columns.map((col, colIndex) => (
        <div className={styles.column} key={colIndex}>
          {paintings.map(
            (painting, index) =>
              col.includes(painting.name) && (
                <div className={styles.painting} key={index}>
                  <img
                    src={painting.images.thumbnail}
                    className={styles.img}
                    alt={painting.name}
                  />
                  <h2 className={styles.name}>{painting.name}</h2>
                  <p className={styles.artist}>{painting.artist.name}</p>
                </div>
              ),
          )}
        </div>
      ))}
    </main>
  );
}

export default Gallery;
