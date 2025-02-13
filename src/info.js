import React from "react";
import info_pict from './images/ropted.jpg'
import './info.scss'
import Uniq from "./uniq";
const Info =()=>{
    return(
        <div className="info">
            {/* <div className="info_left"> */}
            <img className="info_pict_img" src={info_pict}/>
            {/* </div> */}
            <div className="info_right">
                <p className="info_tittle tittle">
                 ANSAU
                </p>
                <p className="info_text">
                Представляем уникальный жилой комплекс с идеальным сочетанием комфорта и безопасности для вашей семьи! Просторные квартиры  и удобные общественные пространства — всё для вашего удобства. Встроенные детский сад, медицинский центр и коммерческие помещения сделают вашу жизнь ещё проще.
                <br/>
                Для вашего комфорта предусмотрены двухуровневая парковка, спортивные и детские площадки, а также зоны для отдыха. Современные инженерные системы и экологичные материалы обеспечивают долговечность и минимальное воздействие на природу.
                Не упустите шанс стать частью качественного и комфортного жилого пространства!
                </p>
                {/* <Uniq/> */}
            </div>
        </div>
    )
}

export default Info;