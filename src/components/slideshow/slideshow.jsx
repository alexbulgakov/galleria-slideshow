import { useState } from 'react';

import SliderControls from '../slider-controls/slider-controls';
import Slider from '../slider/slider';

import styles from './slideshow.module.css';

function Slideshow({ currentPainting, paintings }) {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <Slider
        currentPainting={currentPainting}
        paintings={paintings}
        direction={direction}
        setPage={setPage}
        page={page}
      />
      <SliderControls paginate={paginate} />
    </>
  );
}

export default Slideshow;
