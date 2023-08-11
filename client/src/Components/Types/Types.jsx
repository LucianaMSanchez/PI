import style from "./Types.module.css";
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTypes } from "../../redux/actions";
import images from "../../utils/images";


const Types = () => {
   
    const types = useSelector((state) => state.types); 
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getTypes());
        }, [dispatch]);


    return (
        <div className={style.back}>
            <div className={style.container}>
        {types?.map((type, index) => (
            <div key={index} className={style.type}>
                <Link to={`/typeDetail/${type.name}`} > 
                {type.name === 'shadow' && <img src={images.shadow} alt="shadow" className={style.typeImage}/>}
                {type.name === 'bug' && <img src={images.bug} alt="bug" className={style.typeImage}/>}
                {type.name === 'dark' && <img src={images.dark} alt="dark" className={style.typeImage}/>}
                {type.name === 'dragon' && <img src={images.dragon} alt="dragon" className={style.typeImage}/>}
                {type.name === 'fairy' && <img src={images.fairy} alt="fairy" className={style.typeImage}/>}
                {type.name === 'fighting' && <img src={images.fighting} alt="fighting" className={style.typeImage}/>}
                {type.name === 'fire' && <img src={images.fire} alt="fire" className={style.typeImage}/>}
                {type.name === 'flying' && <img src={images.flying} alt="flying" className={style.typeImage}/>}
                {type.name === 'ghost' && <img src={images.ghost} alt="ghost" className={style.typeImage}/>}
                {type.name === 'grass' && <img src={images.grass} alt="grass" className={style.typeImage}/>}
                {type.name === 'ground' && <img src={images.ground} alt="ground" className={style.typeImage}/>}
                {type.name === 'ice' && <img src={images.ice} alt="ice" className={style.typeImage}/>}
                {type.name === 'electric' && <img src={images.electric} alt="electric" className={style.typeImage}/>}
                {type.name === 'steel' && <img src={images.steel} alt="steel" className={style.typeImage}/>}
                {type.name === 'normal' && <img src={images.normal} alt="normal" className={style.typeImage}/>}
                {type.name === 'poison' && <img src={images.poison} alt="poison" className={style.typeImage}/>}
                {type.name === 'psychic' && <img src={images.psychic} alt="psychic" className={style.typeImage}/>}
                {type.name === 'rock' && <img src={images.rock} alt="rock" className={style.typeImage}/>}
                {type.name === 'unknown' && <img src={images.unknown} alt="unknown" className={style.typeImage}/>}
                {type.name === 'water' && <img src={images.water} alt="water" className={style.typeImage}/>}
                </Link>
                    <span className={style.typeName}>{type.name}</span>
            </div>
         ))}
         </div>
        </div>

    )
}

export default Types;
