import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import top_carousel1 from './images/top_carousel_1.jpg'
import top_carousel2 from './images/top_carousel_2.jpg'
import top_carousel3 from './images/top_carousel_3.jpg'
import { FiletypePdf } from 'react-bootstrap-icons';
import './first_slider.scss'


const FirstSlider = ()=>{
    return(
        <div className="top_carousel">
        <div className="black-layout">
            <div className="first-slide-info-box">
                <p className="first-slide-info-tittle">Жилой комплекс “Ansau”</p>
                <p className="first-slide-info-text">Все дороги ведут домой</p>
                <button className="first-slide-info-button">
                    Оставить заявку
                </button>
                {/* <button className="first-slide-info-button1">
                    Оставить заявку
                </button> */}
            </div>
        </div>
       
        <Carousel fade touch controls={false}>
        <Carousel.Item interval={1500}>
          <img className='top_carous_img d-block w-100 h-90' src={top_carousel1}/>
          {/* <Carousel.Caption className='top_carous_text_box'>
            <h3 className='top_carous_img_tittle'>Жилой комплекс «Ansau»</h3>
            <p className='top_carous_img_text'>Искуство жить в гармонии.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
  
  
        <Carousel.Item interval={1500}>
        <img className='top_carous_img d-block w-100 h-90' src={top_carousel2}/>
          {/* <Carousel.Caption className='top_carous_text_box'>
             <h3 className='top_carous_img_tittle'>Жилой комплекс «Ansau»</h3>
            <p className='top_carous_img_text'>Быть свободным и выбирать самое лучшее</p> 
      
          </Carousel.Caption> */}
        </Carousel.Item>
  
  
        <Carousel.Item interval={1500}>
        <img className='top_carous_img d-block w-100 h-90' src={top_carousel3}/>
          {/* <Carousel.Caption className='top_carous_text_box'>
            <h3 className='top_carous_img_tittle'>Жилой комплекс «Ansau»</h3>
            <p className='top_carous_img_text'>
              Великолепие в каждой детали.
            </p>

          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      </div>
    )
}

export default FirstSlider