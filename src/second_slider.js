import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import ss1 from './images/secondslider/ss1.jpg'
import ss2 from './images/secondslider/ss2.jpg'
import ss3 from './images/secondslider/ss3.jpg'
import ss4 from './images/secondslider/ss4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';




import './secondslider.scss'
const Second_slider = ()=>{


    return(
        <Swiper className="swiper-container"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 20500,
        disableOnInteraction: false,
      }}
      flipEffect={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="swipe_slide">
        <div className="swiper_box swiper_box_1"
        style={{
            backgroundImage: `url(${ss1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh',
            width: '100vw',
            backgroundRepeat: 'no-repeat',
        }}
        >
            <div className="swiper_box_textbox">
                <p className="swiper_box_text">
                Панорамные окна от пола до потолка позволят вам наслаждаться видами на столицу и создадут атмосферу жизни в центре событий.
                </p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="swipe_slide">
        <div className="swiper_box swiper_box_1"
        style={{
            backgroundImage: `url(${ss1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh',
            width: '100vw',
            backgroundRepeat: 'no-repeat',
        }}
        >
            <div className="swiper_box_textbox">
                <p className="swiper_box_text">
                Панорамные окна от пола до потолка позволят вам наслаждаться видами на столицу и создадут атмосферу жизни в центре событий.
                </p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="swipe_slide">
        <div className="swiper_box swiper_box_1"
        style={{
            backgroundImage: `url(${ss1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh',
            width: '100vw',
            backgroundRepeat: 'no-repeat',
        }}
        >
            <div className="swiper_box_textbox">
                <p className="swiper_box_text">
                Панорамные окна от пола до потолка позволят вам наслаждаться видами на столицу и создадут атмосферу жизни в центре событий.
                </p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="swipe_slide">
        <div className="swiper_box swiper_box_1"
        style={{
            backgroundImage: `url(${ss1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh',
            width: '100vw',
            backgroundRepeat: 'no-repeat',
        }}
        >
            <div className="swiper_box_textbox">
                <p className="swiper_box_text">
                Панорамные окна от пола до потолка позволят вам наслаждаться видами на столицу и создадут атмосферу жизни в центре событий.
                </p>
            </div>
        </div>
        </SwiperSlide>

  
    </Swiper>
    )

}
export default Second_slider