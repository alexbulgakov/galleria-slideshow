import { useState } from 'react';

import { data } from 'src/assets/data/data';
import { motion } from 'framer-motion';

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

  const variants = {
    center: { opacity: 1 },
    enter: { opacity: 0 },
    exit: { opacity: 0 },
  };

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
        <motion.div
          key={slideshowVisibility ? 'slideshow' : 'gallery'}
          transition={{ duration: 0.5 }}
          variants={variants}
          animate="center"
          initial="enter"
          exit="exit"
        >
          <Gallery
            toggleSlideshowVisibility={toggleSlideShow}
            setCurrentPainting={setCurrentPainting}
            paintings={data}
          />
        </motion.div>
      )}
    </div>
  );
}

export default App;
