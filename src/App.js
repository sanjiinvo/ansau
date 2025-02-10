import logo from './logo.svg';
import './App.scss';
import { Navbar } from 'react-bootstrap';
import Navbarhead from './navbar';
import FirstSlider from './first_slider';
import Info from './info';
import { useEffect } from 'react';
import Uniq from './uniq';

var DG = require('2gis-maps');
function App() {

//   var map = DG.map('map', {
//     'center': [51.1379538, 71.4342074],
//     'zoom': 18
    
// });

  useEffect(()=>{
    var ansaumap = DG.map('ansaumap', {
      'center': [51.109774, 71.529070],
      'zoom': 17
    });
    DG.marker([51.109774, 71.529070]).addTo(ansaumap)
    // DG.marker([51.0950535, 71.4152394]).addTo(map)
  },[])
  return (
    <div className="App">
      <Navbarhead/>
      <FirstSlider/>
      <Info/>
      <Uniq/>
      <div className='location_2gis mt-5'>
        <p className='location_tittle'>Расположение</p>
        {/* <LocationMap/> */}
        <div id="ansaumap" style={{width:'75vw', height:'50vh'}}></div>
      </div>
      <div className='vision mt-5'>
        <iframe src='https://astana3d.kz/3d/nak/ansau/#pano548173/75.4/14.5/43.3' style={{width:'50%', height:'70vh'}}>
          
        </iframe>
      </div>

    </div>
  );
}

export default App;
