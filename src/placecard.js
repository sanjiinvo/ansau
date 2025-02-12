import React from "react";
import './placecard.scss'
const PlaceCards = ()=>{
    return(
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
    )
}

export default PlaceCards;