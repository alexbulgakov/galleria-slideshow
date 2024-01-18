import styles from './painting.module.css';

function Painting({ painting }) {
  return (
    <main className={styles.painting}>
      <section className={styles.images}>
        <img
          src={painting.images.hero.large}
          className={styles.image}
          alt={painting.name}
        />
        <div>
          <h1>{painting.name}</h1>
          <p>{painting.artist.name}</p>
        </div>
        <img src={painting.artist.image} alt={painting.artist.name} />
      </section>
      <section className={styles.about}>
        <p className={styles.year}>{painting.year}</p>
        <article>
          <p className={styles.description}>{painting.description}</p>
          <a href={painting.source} rel="noreferrer" target="_blank">
            GO TO SOURCE
          </a>
        </article>
      </section>
    </main>
  );
}

export default Painting;
