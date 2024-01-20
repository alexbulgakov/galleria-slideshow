import { useEffect } from 'react';
import { useState } from 'react';

import { wrap } from 'popmotion';

import SliderControls from '../slider-controls/slider-controls';
import Slider from '../slider/slider';

function Slideshow({ currentPainting, paintings }) {
  const [[page, direction], setPage] = useState([0, 0]);

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

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const imageIndex = wrap(0, paintings.length, page);

  return (
    <>
      <Slider
        imageIndex={imageIndex}
        paintings={paintings}
        direction={direction}
        paginate={paginate}
        page={page}
      />
      <SliderControls
        currentPainting={paintings[imageIndex]}
        paginate={paginate}
      />
    </>
  );
}

export default Slideshow;
