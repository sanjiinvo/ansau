import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import './roadmap.scss';
import { CarFrontFill, GeoFill, PersonWalking } from "react-bootstrap-icons";
import akniet from './images/cards/akniet.png'
import bestbaby from './images/cards/bestbabby.png'
import binom1 from './images/cards/binom1.png'
import steambaby from './images/cards/steambaby.png'



const categories = {
    "Образование": [
        { title: "Детский сад “Best baby”", range: "700 м", walk: 1, time: "7 минут" , bgphone: bestbaby },
        { title: "Детский сад «Baby Steam»", range: "2 км", walk: 1, time: "10 минут" , bgphone: steambaby },
        { title: "Детский сад “Baby king”", range: "800 м", walk: 1, time: "9 минут" },
        // { title: "Детский сад “Alladin”", range: "1 км", walk: 1, time: "10 минут" },
        { title: "Детский сад “Akniyet”", range: "800 м", walk: 1, time: "9 минут" , bgphone: akniet},
 
        { title: "Школа \"BINOM\"", range: "1–2 км", walk: 1, time: "10–15 минут" , bgphone: binom1},
        // { title: "Школа 57", range: "3 км", walk: 1, time: "20 минут" },

        { title: "Центр современного искусства \"Шабыт\"", range: "6 км", walk: 0, time: "10 минут" },
        { title: "Астана Айти", range: "10 км", walk: 0, time: "15 минут" },
        { title: "Международный аэропорт им.Назарбаев", range: "15 км", walk: 0, time: "20 минут" }
    ],

    "ТРЦ": [
        { title: "Торговый центр \"Даму Молл\"", range: "5 км", walk: 0, time: "5 минут" },
        { title: "Торговый центр \"Гринвич\"", range: "4 км", walk: 0, time: "7 минут" },
        { title: "Торговый центр \"Смолл\"", range: "3 км", walk: 0, time: "10 минут" },
        { title: "Торговый центр \"Мега Силквей\"", range: "11 км", walk: 0, time: "15 минут" }
    ],
    "Здоровье": [
        { title: "1-я городская больница", range: "8 км", walk: 0, time: "10 минут" },
        { title: "Детская больница", range: "8 км", walk: 0, time: "10 минут" },
        { title: "Пожарная станция", range: "3 км", walk: 0, time: "8 минут" },
        { title: "Инвиктус", range: "2 км", walk: 0, time: "5 минут" },
        { title: "Спорт. комплекс им.Б.Саттарханова", range: "800 м", walk: 0, time: "5 минут" },
        { title: "Спорт. комплекс «Палуан»", range: "Не указано", walk: 0, time: "Не указано" },
        { title: "Тренажерный зал «Iron club»", range: "3 км", walk: 0, time: "7 минут" }
      
    ],
    "Достопримечательности": [
        { title: "Мечеть Хазрет Султан", range: "6 км", walk: 0, time: "10 минут" },
        { title: "Драматический театр имени К. Байсеитовой", range: "4 км", walk: 0, time: "8 минут" },
        { title: "Бас Мешит", range: "13 км", walk: 0, time: "25 минут" },
        { title: "Башня \"Байтерек\"", range: "8 км", walk: 0, time: "20 минут" },
        { title: "Президентский Парк", range: "5км", walk: 0, time: "20 минут" }
    ],
  };
  
const RoadMaps = () =>{

    const [selectedCategory, setSelectedCategory] = useState("Образование");
    const [isFading, setIsFading] = useState(false);

    const handleCategoryClick = (category) => {
        if (category !== selectedCategory) {
          setIsFading(true); // Запускаем анимацию исчезновения
          setTimeout(() => {
            setSelectedCategory(category);
            setIsFading(false); // Возвращаем видимость через 300ms
          }, 300);
        }
      };



    return(
        <div className="roadmaps">
        <p className="roadmaps_tittle">Road Maps</p>
        <div className="roadmap_box">
          <div className="roadmap_right">
            {Object.keys(categories).map((category) => (
              <div
                key={category}
                className={`cards-group-button ${selectedCategory === category ? "active" : ""}`}
                onClick={() => handleCategoryClick(category)}
              >
                <p className="card-group-tittle">{category}</p>
              </div>
            ))}
          </div>
  
          {/* Отображаем карточки по выбранной категории */}
          <div className={`roadmap_left ${isFading ? "fade-out" : "fade-in"}`}>
          {categories[selectedCategory].map((item, index) => (
            <div key={index} className="roadmap_card" style={{ backgroundImage: `url(${item.bgphone})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <div className="card_info">
                  <div className="card_range_text">
                    <GeoFill size={20} color="brown" />
                    <p className="card_range_range">{item.range}</p>
                  </div>
                <p className="card_tittle">{item.title}</p>

                  <div className="card_time_text">
                    {item.walk === 1 ? <PersonWalking size={20} color="brown" /> : <CarFrontFill size={20} color="brown" />}
                    <p>{item.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </div>
    );
    

}

export default RoadMaps;