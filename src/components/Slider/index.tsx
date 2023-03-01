import React, { useEffect, useState } from 'react';

import { FormattedMessage } from 'react-intl';

import { useNavigate } from 'react-router';

import { sliderContent } from './sliderContent';

import { backgroundImages } from './backgroundImages';

import { SliderEllipses } from './SliderEllipses';

import styles from './Slider.module.css';

import { Button } from '../../uikit/Button';

// import './SliderStyles.css';

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const updateActiveEllipse = (newIndex: number) => {
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (activeIndex < sliderContent.length) {
      const interval = setInterval(() => setActiveIndex(activeIndex + 1), 5000);
      return () => clearInterval(interval);
    }
    return setActiveIndex(activeIndex - sliderContent.length);
  }, [activeIndex]);

  return (
    <div className={styles.slider_component_wrapper}>
      <div className={styles.slider_carousel}>
        <div
          className={styles.slider_background_inner}
          // Had to use inline styling for background image switch
          style={{ transform: `translateX(-${activeIndex * 25}%)` }}
        >
          {backgroundImages.map((img) => (
            <div className={styles.slider_carousel_item} key={img}>
              <img src={img} key={img} alt="" className={styles.slider_img} />
            </div>
          ))}
        </div>
      </div>
      {sliderContent.map(
        (content) =>
          activeIndex === content.id && (
            <React.Fragment key={content.id}>
              <div className={styles.slider_text_big}>{content.title}</div>
              <div className={styles.slider_text_small}>{content.value}</div>
              <div className={styles.slider_text_info}>{content.info}</div>
              <Button
                className={styles.slider_button}
                onClick={() => navigate('container')}
                variant={'welcome'}
              >
                <FormattedMessage id="welcomeBtn" />
              </Button>
              <SliderEllipses
                activeIndex={activeIndex}
                updateActiveEllipse={updateActiveEllipse}
              />
            </React.Fragment>
          )
      )}
    </div>
  );
};
