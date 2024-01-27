import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { wrap } from 'popmotion';

import SliderControls from '../slider-controls/slider-controls';
import Slider from '../slider/slider';

function Slideshow({ currentPainting, paintings }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (Object.keys(currentPainting).length !== 0) {
      const currentIndex = paintings.findIndex(
        (el) => el.name === currentPainting.name,
      );

      setPage([currentIndex, 1]);
    }

    return () => {
      setPage([0, 0]);
    };
  }, [currentPainting, paintings, setPage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const imageIndex = wrap(0, paintings.length, page);

  const fadeInVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <>
      {isVisible && (
        <motion.div
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ duration: 1 }}
          variants={fadeInVariants}
          initial="hidden"
        >
          <Slider
            imageIndex={imageIndex}
            paintings={paintings}
            direction={direction}
            paginate={paginate}
            page={page}
          />
        </motion.div>
      )}
      <SliderControls
        currentPainting={paintings[imageIndex]}
        currentIndex={imageIndex}
        total={paintings.length}
        paginate={paginate}
      />
    </>
  );
}

export default Slideshow;
