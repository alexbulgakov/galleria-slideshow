import ReactDOM from 'react-dom';

import { motion } from 'framer-motion';

import styles from './image.module.css';

function Image({ painting, setOpen }) {
  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: '-50%', y: '-50%' },
    visible: { opacity: 1, x: '-50%', y: '-50%', scale: 1 },
  };

  const transition = {
    type: 'spring',
    stiffness: 320,
    damping: 25,
  };

  const modalRoot = document.getElementById('react-modals');
  return ReactDOM.createPortal(
    <>
      <motion.div
        className={styles.imageBackDrop}
        onClick={() => setOpen(false)}
        variants={backdropVariants}
        transition={transition}
        animate="visible"
        initial="hidden"
        exit="hidden"
      />

      <motion.div
        className={styles.imageContainer}
        variants={imageVariants}
        transition={transition}
        animate="visible"
        initial="hidden"
        exit="hidden"
      >
        <button className={styles.closeButton} onClick={() => setOpen(false)}>
          CLOSE
        </button>

        <img src={painting.images.gallery} alt={painting.name} />
      </motion.div>
    </>,
    modalRoot,
  );
}

export default Image;
