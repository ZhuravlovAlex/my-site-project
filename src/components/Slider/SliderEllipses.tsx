import React from 'react';

// import { Ellipse } from "../Icons";

import { sliderContent } from './sliderContent';

// import './SliderStyles.css';

import styles from './Slider.module.css';

type SliderCardProps = {
  updateActiveEllipse?: (activeIndex: number) => void;
  activeIndex?: number | undefined;
};

export const SliderEllipses = ({
  updateActiveEllipse,
  activeIndex,
}: SliderCardProps) => (
  <div className={styles.slider_wrapper}>
    {sliderContent.map((item) => (
      <React.Fragment key={item.id}>
        {/* <Ellipse
          className={`slider ${activeIndex === item.id && "slider-selected"}`}
          onClick={() => {
            updateActiveEllipse?.(item.id);
          }}
          key={item.id}
        /> */}
      </React.Fragment>
    ))}
  </div>
);
