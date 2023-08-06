import React from "react";
import { Link } from "react-router-dom";
import style from "./Episode.module.css";
import image from "../assets/homeworkRAM.jpg"

function Episode({id, name}) {


   return (
    
      <div className={style.container}>
        <div>
            <Link to={`/episode/detail/${id}`} > 
                <img className={style.image} src={image} alt='imagen' />
            </Link>
        </div>
        
        <div className={style.titulo}>
            <h2 className={style.name}>{name} </h2>
         </div>
      </div>
   );
}



export default Episode;


