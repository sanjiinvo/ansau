import logo from './logo.svg';
import './App.scss';
import { Navbar } from 'react-bootstrap';
import Navbarhead from './navbar';
import FirstSlider from './first_slider';
import Info from './info';
import { useEffect } from 'react';
import Uniq from './uniq';
import VerticalCarousel from './swip';
import RoadMaps from './roadmaps';
import Second_slider from './second_slider';

var DG = require('2gis-maps');
function App() {


  const cards = [
    { title: "Школа \"Бином\"", range: "1–2 км", walk: 1, time: "10–15 минут" },
    { title: "Школа 57", range: "3 км", walk: 1, time: "20 минут" },
    { title: "Школа 57", range: "4 км", walk: 1, time: "25 минут" },
    { title: "Детский сад \"Best baby\"", range: "700 м", walk: 1, time: "7 минут" },
    { title: "Детский сад \"Baby king\"", range: "800 м", walk: 1, time: "9 минут" },
    { title: "Детский сад \"Alladin\"", range: "1 км", walk: 1, time: "10 минут" },
    { title: "Детский сад \"Akniyet\"", range: "800 м", walk: 1, time: "9 минут" },
    { title: "Частный Детский сад", range: "500 м", walk: 1, time: "5 минут" },
    { title: "Остановка ЛРТ", range: "500 м", walk: 1, time: "5 минут" },
  

  ]
  const cardsc = [
    { title: "Торговый центр \"Даму Молл\"", range: "5 км", walk: 0, time: "5 минут" },
    { title: "Мечеть Хазрет Султан", range: "6 км", walk: 0, time: "10 минут" },
    { title: "Международный аэропорт Нурсултан Назарбаев", range: "15 км", walk: 0, time: "20 минут" },
    { title: "Центр современного искусства \"Шабыт\"", range: "6 км", walk: 0, time: "10 минут" },
    { title: "Драматический театр имени К. Байсеитовой", range: "4 км", walk: 0, time: "8 минут" },
    { title: "Астана Айти", range: "10 км", walk: 0, time: "15 минут" },
    { title: "Бас Мешит", range: "13 км", walk: 0, time: "25 минут" },
    { title: "Башня \"Байтерек\"", range: "8 км", walk: 0, time: "20 минут" },
    { title: "Торговый центр \"Хан Шатыр\"", range: "11 км", walk: 0, time: "10 минут" },
    { title: "Торговый центр \"Мега Силквей\"", range: "11 км", walk: 0, time: "15 минут" },
    { title: "1-я городская больница", range: "8 км", walk: 0, time: "10 минут" },
    { title: "Детская больница", range: "8 км", walk: 0, time: "10 минут" },
    { title: "Пожарная станция", range: "3 км", walk: 0, time: "8 минут" },
    { title: "Торговый центр \"Гринвич\"", range: "4 км", walk: 0, time: "7 минут" },
    { title: "Торговый центр \"Смолл\"", range: "3 км", walk: 0, time: "10 минут" },
    { title: "Инвиктус", range: "2 км", walk: 0, time: "5 минут" }
  ]
  

//   var map = DG.map('map', {
//     'center': [51.1379538, 71.4342074],
//     'zoom': 18
    
// });

  // useEffect(()=>{
  //   var ansaumap = DG.map('ansaumap', {
  //     'center': [51.109774, 71.529070],
  //     'zoom': 17
  //   });
  //   DG.marker([51.109774, 71.529070]).addTo(ansaumap)
  //   // DG.marker([51.0950535, 71.4152394]).addTo(map)
  // },[])
  return (
    <div className="App">
      <Navbarhead/>
      <FirstSlider/>
      <Info/>
      {/* <Uniq/> */}
      {/* <div className='location_2gis mt-5 pb-3'> */}
        {/* <p className='location_tittle'>Расположение</p> */}
        {/* <LocationMap/> */}
        {/* <div id="ansaumap" style={{width:'75vw', height:'50vh'}}></div> */}
      {/* </div> */}
      <div className='vision_3d mt-3'>
        <iframe src='https://astana3d.kz/3d/nak/ansau/#pano548173/75.4/14.5/43.3' style={{width:'100%', height:'80vh'}}></iframe>
        </div>
        <RoadMaps/>

        <Second_slider/>
        <Uniq/>
      {/* <div className='vision mt-3'>

        <div className='vision_road_box'>
          <p className='vision_road_tittle'>Время в пути</p>
        <div className='vision_road'>
        <VerticalCarousel items={cards} />
        <VerticalCarousel items={cardsc} />
        </div>
        </div>

      </div> */}

    </div>
  );
}

export default App;
