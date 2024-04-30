import React from "react";
import Slider from 'react-slick';
import slider1 from '../../../assets/slider1.png'
import slider2 from '../../../assets/slider2.png'
import slider3 from '../../../assets/slider3.png'
import slider4 from '../../../assets/slider4.png'
import slider5 from '../../../assets/slider5.png'
import slider6 from '../../../assets/slider6.png'
import styles from './ImageSlider.module.css'
import { Carousel } from "react-bootstrap";

const ImageSlider: React.FC = () =>  {
  return (
    <Carousel>
      <Carousel.Item>
        <img
            src={slider1}
            className={styles.img1}
        />
        <Carousel.Caption>
            <h3>Высококачественная мебель</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            src={slider2}
            className={styles.img2}
        />
        <Carousel.Caption>
            <h3>Для школ</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            src={slider3}
            className={styles.img3}
        />
        <Carousel.Caption>
            <h3>Для техникумов</h3>
        </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
        <img
            src={slider4}
            className={styles.img4}
        />
        <Carousel.Caption>
            <h3>Для вузов</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            src={slider5}
            className={styles.img5}
        />
        <Carousel.Caption>
            <h3>Для предприятий</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            src={slider6}
            className={styles.img6}
        />
        <Carousel.Caption>
            <h3>Для организаций</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
