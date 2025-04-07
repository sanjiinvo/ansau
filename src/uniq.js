import React from "react";
import './uniq.scss'
import { BoundingBox, Bricks, CcSquareFill, ChatSquareDots, Fingerprint, HouseCheckFill, PersonBoundingBox, Square, SquareFill,PlusSquareFill, InfoSquare, FilterSquare, SlashSquareFill, HouseCheck, ArrowsVertical, Stack, BuildingsFill } from "react-bootstrap-icons";



const Uniq =()=>{




    return(
        <div className="uniq_ansau">
            <div className="uniq_items">
            <PersonBoundingBox size={40} color="brown"/>
            <p className="uniq_items_tittle">FaceID</p>
            </div>


            <div className="uniq_items">
            <Bricks size={40} color="brown"/>
            <p className="uniq_items_tittle">Кирпичные <br/> стены </p>
            </div>

            <div className="uniq_items">
            <Stack size={40} color="brown"/>
            <p className="uniq_items_tittle">9 этажей </p>
            </div>

            <div className="uniq_items">
            <BuildingsFill size={40} color="brown"/>
            <p className="uniq_items_tittle">Количество<br/> квартир -  295 </p>
            </div>

            <div className="uniq_items ">
            <ArrowsVertical className="arrow-vert" size={42} color="brown"/>
            <p className="uniq_items_tittle">Высота <br/> потолка - 3м </p>
            </div>

            <div className="uniq_items">
            <HouseCheckFill size={40} color="brown"/>
            <p className="uniq_items_tittle">Облицовочный кирпич <br/> фиброцементных панелей </p>
            </div>
            <div className="uniq_items">
            <HouseCheckFill size={40} color="brown"/>
            <p className="uniq_items_tittle">Облицовочный кирпич <br/> фиброцементных панелей </p>
            </div>

        </div>
    )
}

export default Uniq;