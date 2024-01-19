import { useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';

import Painting from '../painting/painting';

import styles from './slider.module.css';

const variants = {
  exit: (direction) => {
    return {
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      zIndex: 0,
    };
  },
  enter: (direction) => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    };
  },
  center: {
    opacity: 1,
    zIndex: 1,
    x: 0,
  },
};

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset, velocity) => {
//   return Math.abs(offset) * velocity;
// };

function Slider({ currentPainting, paintings, direction, setPage, page }) {
  // const [[page, direction], setPage] = useState([0, 0]);

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
  }, []);

  const imageIndex = wrap(0, paintings.length, page);

  // const paginate = (newDirection) => {
  //   setPage([page + newDirection, newDirection]);
  // };

  return (
    <main className={styles.slide}>
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          // onDragEnd={(e, { velocity, offset }) => {
          //   const swipe = swipePower(offset.x, velocity.x);

          //   if (swipe < -swipeConfidenceThreshold) {
          //     paginate(1);
          //   } else if (swipe > swipeConfidenceThreshold) {
          //     paginate(-1);
          //   }
          // }}
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          dragConstraints={{ right: 0, left: 0 }}
          className={styles.container}
          variants={variants}
          custom={direction}
          animate="center"
          initial="enter"
          dragElastic={1}
          exit="exit"
          key={page}
          drag="x"
        >
          <Painting painting={paintings[imageIndex]} />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

export default Slider;
