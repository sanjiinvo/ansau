import React from "react";
import './uniq.scss'
import { BoundingBox, Bricks, CcSquareFill, ChatSquareDots, Fingerprint, HouseCheckFill, PersonBoundingBox, Square, SquareFill,PlusSquareFill, InfoSquare, FilterSquare, SlashSquareFill } from "react-bootstrap-icons";



const Uniq =()=>{




    return(
        <div className="uniq_ansau">
            <div className="uniq_items">
            <i class="bi bi-fingerprint"></i>
            <Fingerprint color="brown" size={40}/><PersonBoundingBox size={40} color="brown"/>
                <p className="uniq_items_tittle">FaceID<br/>TouchID</p>
                <p>Cистемы распознавания лиц и отпечатков </p>
            </div>
            <div className="uniq_items">
            <i class="bi bi-bricks"></i>
            <Bricks size={40} color="brown"/>
                <p className="uniq_items_tittle">Кирпичные <br/> стены </p>
                <p>Долговечность и надежность, отличная тепло- и шумоизоляция </p>
            </div>
            <div className="uniq_items">
            <i class="bi bi-fingerprint"></i>
            <HouseCheckFill size={40} color="brown"/>
                <p className="uniq_items_tittle">Фасад из фиброцементных панелей </p>
                <p>современный и устойчивый к погодным условиям </p>
            </div>
            <div className="uniq_items">
            <i class="bi bi-fingerprint"></i>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="brown" class="bi bi-2-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306"/>
</svg>
                <p className="uniq_items_tittle">Окна с двухкамерным стеклопакетом</p>
                <p>комфортное проживание в любое время года </p>
            </div>
        </div>
    )
}

export default Uniq;