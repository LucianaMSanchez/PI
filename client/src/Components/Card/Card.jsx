import React from "react";
import { connect } from 'react-redux';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { closeCard } from "../../redux/actions";
import style from "./Card.module.css";
import ellipse from "../../assets/Ellipse 1.png";
import shadow from "../../assets/types/shadow.png";
import bug from "../../assets/types/bug.png";
import dark from "../../assets/types/dark.png";
import dragon from "../../assets/types/dragon.png";
import fairy from "../../assets/types/fairy.png";
import fighting from "../../assets/types/fighting.png";
import fire from "../../assets/types/fire.png";
import flying from "../../assets/types/flying.png";
import ghost from "../../assets/types/ghost.png";
import grass from "../../assets/types/grass.png";
import ground from "../../assets/types/ground.png";
import ice from "../../assets/types/ice.png";
import electric from "../../assets/types/electric.png";
import steel from "../../assets/types/steel.png";
import normal from "../../assets/types/normal.png";
import poison from "../../assets/types/poison.png";
import psychic from "../../assets/types/psychic.png";
import rock from "../../assets/types/rock.png";
import unknown from "../../assets/types/unknown.png";
import water from "../../assets/types/water.png";



function Card({id, name, image, types, closeCard }) {
   
const location = useLocation();
const pokemons = useSelector((state) => state.pokemons);


const onClose = () => {
   closeCard(id, pokemons)
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
            </div>
            
            <div>
               <div className={style.imageContainer}>
                  {id > 1281 ? (
                     <Link to={`/createDetail/${id}`}>
                     <img className={style.image} src={image} alt='imagen' />
                     </Link>
                  ) : (
                     <Link to={`/detail/${id}`}>
                        <img className={style.image} src={image} alt='imagen' />
                     </Link>
                  )}
                  <div className={style.ellipse}>
                     <img src={ellipse} alt="ellipse" />
                  </div>
               </div>
            </div> 
         </div>

         <div className={style.types}>
         {types?.map((type, index) => (
            <div key={index} className={style.type}>
                <Link to={`/typeDetail/${type.name}`} > 
                {type.name === 'shadow' && <img src={shadow} alt="shadow" className={style.typeImage}/>}
                {type.name === 'bug' && <img src={bug} alt="bug" className={style.typeImage}/>}
                {type.name === 'dark' && <img src={dark} alt="dark" className={style.typeImage}/>}
                {type.name === 'dragon' && <img src={dragon} alt="dragon" className={style.typeImage}/>}
                {type.name === 'fairy' && <img src={fairy} alt="fairy" className={style.typeImage}/>}
                {type.name === 'fighting' && <img src={fighting} alt="fighting" className={style.typeImage}/>}
                {type.name === 'fire' && <img src={fire} alt="fire" className={style.typeImage}/>}
                {type.name === 'flying' && <img src={flying} alt="flying" className={style.typeImage}/>}
                {type.name === 'ghost' && <img src={ghost} alt="ghost" className={style.typeImage}/>}
                {type.name === 'grass' && <img src={grass} alt="grass" className={style.typeImage}/>}
                {type.name === 'ground' && <img src={ground} alt="ground" className={style.typeImage}/>}
                {type.name === 'ice' && <img src={ice} alt="ice" className={style.typeImage}/>}
                {type.name === 'electric' && <img src={electric} alt="electric" className={style.typeImage}/>}
                {type.name === 'steel' && <img src={steel} alt="steel" className={style.typeImage}/>}
                {type.name === 'normal' && <img src={normal} alt="normal" className={style.typeImage}/>}
                {type.name === 'poison' && <img src={poison} alt="poison" className={style.typeImage}/>}
                {type.name === 'psychic' && <img src={psychic} alt="psychic" className={style.typeImage}/>}
                {type.name === 'rock' && <img src={rock} alt="rock" className={style.typeImage}/>}
                {type.name === 'unknown' && <img src={unknown} alt="unknown" className={style.typeImage}/>}
                {type.name === 'water' && <img src={water} alt="water" className={style.typeImage}/>}
                </Link>
                    <span className={style.typeName}>{type.name}</span>
            </div>
         ))}
         </div>
      </div>
   );
}

function mapDispatchToProps(dispatch) {
   return {
      closeCard: function (id, pokemons) {
         dispatch(closeCard(id, pokemons))
      }
   }
};


export default connect (null, mapDispatchToProps) (Card);




