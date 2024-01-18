import { useState } from 'react';

import { data } from 'src/utils/data';

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

  function toggleCurrentPainting(painting) {
    setCurrentPainting(painting);
  }

  return (
    <div className={styles.app}>
      <Header
        toggleSlideshowVisibility={toggleSlideShow}
        slideshowVisibility={slideshowVisibility}
      />
      {slideshowVisibility ? (
        <Slideshow currentPainting={currentPainting} paintings={data} />
      ) : (
        <Gallery
          toggleCurrentPainting={toggleCurrentPainting}
          toggleSlideshowVisibility={toggleSlideShow}
          paintings={data}
        />
      )}
    </div>
  );
}

export default App;
