import { useState } from 'react';

import { data } from 'src/assets/data/data';

import Slideshow from '../slideshow/slideshow';
import Gallery from '../gallery/gallery';
import Header from '../header/header';

import styles from './app.module.css';

function App() {
  const [slideshowVisibility, setSlideshowVisibility] = useState(false);
  const [currentPainting, setCurrentPainting] = useState({});

  function toggleSlideShow() {
    setSlideshowVisibility(!slideshowVisibility);
  }

  return (
    <div className={styles.app}>
      <Header
        toggleSlideshowVisibility={toggleSlideShow}
        slideshowVisibility={slideshowVisibility}
        setCurrentPainting={setCurrentPainting}
      />
      {slideshowVisibility ? (
        <Slideshow currentPainting={currentPainting} paintings={data} />
      ) : (
        <Gallery
          toggleSlideshowVisibility={toggleSlideShow}
          setCurrentPainting={setCurrentPainting}
          paintings={data}
        />
      )}
    </div>
  );
}

export default App;
