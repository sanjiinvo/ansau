import React from "react";
import { CarFrontFill, GeoFill, PersonWalking } from "react-bootstrap-icons";
import "./swip.scss";

const VerticalCarousel = ({ items = [] }) => {
  const animationDuration = items.length * 2.2; // Скорость зависит от кол-ва карточек

  return (
    <div className="carousel-wrapper-v">
      <div 
        className="carousel-container-v" 
        style={{ animationDuration: `${animationDuration}s` }} // Передаем динамическую скорость
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="carousel-item-v">
            <p className="card_tittle">{item.title}</p>
            <div className="card-info-v">
              <div className="card_range_text">
                <GeoFill size={20} color="brown" />
                <p>{item.range}</p>
              </div>
              <div className="card_time_text">
                {item.walk === 1 ? (
                  <PersonWalking size={20} color="brown" />
                ) : (
                  <CarFrontFill size={20} color="brown" />
                )}
                <p>{item.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCarousel;
