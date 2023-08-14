import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addChamps, removeChamps } from "../../redux/actions";
import { switchBackColor, switchIcon } from "../../utils/switchs";
import style from "./PokedexCard.module.css";


const PokedexCard = ({pokemon}) => {

    const [isChamp, setIsChamp] = useState(false);
    const champs = useSelector((state) => state.champs);
    const dispatch = useDispatch();
    const location = useLocation();

    
    const handleChamps = () => {
        if (isChamp){
           setIsChamp(false)
           dispatch(removeChamps(pokemon.id, champs));
        } else {
           setIsChamp(true)
           dispatch(addChamps(pokemon.id));
        }
    };


    const backCard = switchBackColor(style, pokemon.types[0])


return (
    <div className={backCard}>
        <Link to={`/Detail/${pokemon.id}`} >
        <div className={style.miniContainer}>
            <h1 className={style.name}>{pokemon.name.toUpperCase()}</h1>
        </div>
        <div className={style.types}>
        {pokemon.types?.map((type, index) => (
            <div key={index} className={style.type}>
                <img src={switchIcon(type)} alt="type" className={style.typeImage}/>
            </div>
        ))}   
        </div>

        <div className={style.imageContainer}>
            <img src={pokemon.image} alt="imagePoke" className={style.imagePoke}/>
        </div>
        </Link>
        <div className={style.infContainer}>
            <div className={style.caracteristics}>
                <h3 className={style.text}>HP: <span>{pokemon.hitPoints}</span></h3>
                <h3 className={style.text}>Attack: <span>{pokemon.attack}</span></h3>
                <h3 className={style.text}>Defense: <span>{pokemon.defense}</span></h3>
                <h3 className={style.text}>Speed: <span>{pokemon.speed}</span> </h3>                                  
            </div>
        </div> 
        <div className={style.idDiv}>
                <h2 className={style.id}>{pokemon.id}</h2> 
                {location.pathname === "/pokedex" ? (
               <button onClick={handleChamps} className={style.champ} disabled={champs.length === 4}> {isChamp ? "CHAMP⭐" : "CHAMP🔘" } </button>
                ) : ( null 
                )}
        </div>               
    </div>          

    )
};


export default PokedexCard;