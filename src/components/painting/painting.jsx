import { useState } from 'react';

import Image from '../image/image';

import styles from './painting.module.css';

function Painting({ painting }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.painting}>
      <section className={styles.imageAndArtist}>
        <img
          src={painting.images.hero.large}
          className={styles.image}
          alt={painting.name}
        />
        <button
          className={styles.viewImageButton}
          onClick={() => setOpen(true)}
        >
          <img src="src/assets/shared/view.svg" alt="view image" />
          <p className={styles.view}>VIEW IMAGE</p>
        </button>
        <div className={styles.nameAndArtist}>
          <h1 className={styles.name}>{painting.name}</h1>
          <p className={styles.artist}>{painting.artist.name}</p>
        </div>
        <img
          className={styles.artistPhoto}
          src={painting.artist.image}
          alt={painting.artist.name}
        />
      </section>
      <section className={styles.aboutPainting}>
        <article className={styles.history}>
          <p className={styles.year}>{painting.year}</p>
          <p className={styles.description}>{painting.description}</p>
        </article>
        <a
          className={styles.link}
          href={painting.source}
          rel="noreferrer"
          target="_blank"
        >
          GO TO SOURCE
        </a>
      </section>
      {isOpen && <Image painting={painting} setOpen={setOpen} />}
    </div>
  );
}

export default Painting;
