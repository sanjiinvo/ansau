import React, { useState } from "react";
import info_pict from './images/ropted.jpg'
import info_pict_flip from './images/info_pic_flip.jpg'
import info_logo_ansau from './images/logo-home.png'
import './info.scss'
import Uniq from "./uniq";
const Info =()=>{

    const [imageSrc, setImageSrc] = useState(info_pict);


    return(
        <div className="info">
            {/* <div className="info_left"> */}
            <img className="info_pict_img" src={imageSrc}
            />
            {/* </div> */}
            <div className="info_right">
                {/* <p className="info_tittle tittle">
                 ANSAU
                </p> */}
                <img className="info_logo_ansau" src={info_logo_ansau}/>
                <p className="info_text">
                Жилой комплекс «Ансау» — это современное пространство для комфортной жизни, расположенное в перспективном районе «Сарайшық» на пересечении улиц Нажимиденова и Тынышбайұлы. 
                <br/>
                <br/>

                В комплексе предусмотрен вместительный двухуровневый паркинг, что обеспечивает удобство для владельцев автомобилей. Закрытый двор с круглосуточным видеонаблюдением. 
                Не упустите шанс стать частью качественного и комфортного жилого пространства!
                <br/>
                <br/>

                «Ансау» — это не просто жилой комплекс, уютное и безопасное пространство для жизни, где каждый житель может чувствовать себя в безопасности и наслаждаться комфортом в любом возрасте.
                </p>
                    <button className="sub-button">
                        Оставить заявку
                    </button>
                {/* <Uniq/> */}
            </div>
        </div>
    )
}

export default Info;