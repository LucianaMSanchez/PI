import React from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { closeCard } from "../../redux/actions";
import style from "./Card.module.css";
import ellipse1 from "../../assets/Ellipse 1.png";
import ellipse5 from "../../assets/Ellipse 5.png";
import images from "../../utils/images";



function Card({id, name, image, types}) {
   
const location = useLocation();
const pokemons = useSelector((state) => state.pokemons);
const dispatch = useDispatch();

   const onClose = () => {
      dispatch(closeCard(id, pokemons))
   };

   return (
    
      <div className={style.container}>
         <div className={style.miniContainer}>
            <div className={style.supContainer}>
               <div>
                  {location.pathname === "/home" ? (
                     <button onClick={onClose} className={style.closebutton}>x</button>
                     ) : ( null
                     )}
               </div>

               <div>
                  <h2 className={style.name}>{name} </h2>
               </div>

               <div className={style.types}>
                        {types?.map((type, index) => (
                           <div key={index} className={style.type}>
                              <Link to={`/typeDetail/${type}`} > 
                              {type === 'shadow' && <img src={images.shadow} alt="shadow" className={style.typeImage}/>}
                              {type === 'bug' && <img src={images.bug} alt="bug" className={style.typeImage}/>}
                              {type === 'dark' && <img src={images.dark} alt="dark" className={style.typeImage}/>}
                              {type === 'dragon' && <img src={images.dragon} alt="dragon" className={style.typeImage}/>}
                              {type === 'fairy' && <img src={images.fairy} alt="fairy" className={style.typeImage}/>}
                              {type === 'fighting' && <img src={images.fighting} alt="fighting" className={style.typeImage}/>}
                              {type === 'fire' && <img src={images.fire} alt="fire" className={style.typeImage}/>}
                              {type === 'flying' && <img src={images.flying} alt="flying" className={style.typeImage}/>}
                              {type === 'ghost' && <img src={images.ghost} alt="ghost" className={style.typeImage}/>}
                              {type === 'grass' && <img src={images.grass} alt="grass" className={style.typeImage}/>}
                              {type === 'ground' && <img src={images.ground} alt="ground" className={style.typeImage}/>}
                              {type === 'ice' && <img src={images.ice} alt="ice" className={style.typeImage}/>}
                              {type === 'electric' && <img src={images.electric} alt="electric" className={style.typeImage}/>}
                              {type === 'steel' && <img src={images.steel} alt="steel" className={style.typeImage}/>}
                              {type === 'normal' && <img src={images.normal} alt="normal" className={style.typeImage}/>}
                              {type === 'poison' && <img src={images.poison} alt="poison" className={style.typeImage}/>}
                              {type === 'psychic' && <img src={images.psychic} alt="psychic" className={style.typeImage}/>}
                              {type === 'rock' && <img src={images.rock} alt="rock" className={style.typeImage}/>}
                              {type === 'unknown' && <img src={images.unknown} alt="unknown" className={style.typeImage}/>}
                              {type === 'water' && <img src={images.water} alt="water" className={style.typeImage}/>}
                              </Link>
                           </div>
                        ))}
                        </div>
            </div>
            
            <div className={style.infContainer}>
               <div className={style.imageContainer}>
                  {id > 1281 ? (
                     <Link to={`/createDetail/${id}`}>
                        <img className={style.image} src={image} alt='imagen' />
                        <img src={ellipse5} alt="ellipse" className={style.ellipse}/>
                     </Link>
                  ) : (
                     <Link to={`/detail/${id}`}>
                        <img className={style.image} src={image} alt='imagen' />
                        <img src={ellipse1} alt="ellipse" className={style.ellipse}/>
                     </Link>
                  )}
               </div>
            </div> 
         </div>
      </div>
   );
}


export default Card;




