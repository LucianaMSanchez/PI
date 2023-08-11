import style from "./CreateDetail.module.css";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOwnPokemonId, addTypeToPok, clearPokemons, clearTypes } from "../../redux/actions";
import images from "../../utils/images";

const Detail = () => {
   
   const {id} = useParams();
   const dispatch = useDispatch()
   const current = useSelector((state) => state.current)
   const types = useSelector((state) => state.types)
   const error = useSelector((state) => state.error);
   const [backDetail, setBackDetail] = useState(""); 

   useEffect(() => {
      if (id) {
        dispatch(getOwnPokemonId(id));
        if(current){
        dispatch(addTypeToPok(id));
        }
      }
      return () => {
         dispatch(clearPokemons());
         dispatch(clearTypes());
     }
    }, [id]);
    

      useEffect(() => {
        if (current && current.types && current.types.length > 0) {
          const typeBack = current.types[0];
          const detail = switchBackDetail(typeBack);
          setBackDetail(detail); 
        }
      }, [current]);
   
      const switchBackDetail = (type) => {
         switch (type) {
             case "shadow":
                 return style.imageShadow;
             case "fire":
                 return style.imageFire;
             case "water":
                 return style.imageWater;
             case "dark":
                 return style.imageDark;
             case "bug":
                 return style.imageBug;
             case "dragon":
                 return style.imageDragon;
             case "electric":
                 return style.imageElectric;
             case "grass":
                 return style.imageGrass;
             case "poison":
                 return style.imagePoison;
             case "ice":
                 return style.imageIce;
             case "fighting":
                 return style.imageFighting;
             case "flying":
                 return style.imageFlying;
             case "unknown":
                 return style.imageUnknown;
             case "normal":
                 return style.imageNormal;
             case "fairy":
                 return style.imageFairy;
             case "psychic":
                 return style.imagePsychic;
             case "rock":
                 return style.imageRock;
             case "ground":
                 return style.imageGround;
             case "ghost":
                 return style.imageGhost;
             case "steel":
                 return style.imageSteel;
             default:
                 return "";
         }
     }


 return (
    <div className={backDetail}>
      { current.name ? (
         <>
         <div className={style.divUno}>
            <div>
               <Link to="/home">
                  <h2 className={style.goBack}>GO HOME!</h2>
               </Link>
            </div>
            <div className={style.miniContainer}>
               <div>
                  <h2 className={style.name}>{current.name} </h2>
               </div>
               {types?.map((type) => (
                  <Link to={`/typeDetail/${type.name}`} > 
                      <div key={type.name} className={style.type}>
                           {type.name === 'shadow' && <img src={images.shadow} alt="shadow" className={style.typeImage}/>}
                           {type.name === 'bug' && <img src={images.bug} alt="bug" className={style.typeImage}/>}
                           {type.name === 'dark' && <img src={images.dark} alt="dark" className={style.typeImage}/>}
                           {type.name === 'dragon' && <img src={images.dragon} alt="dragon" className={style.typeImage}/>}                                 {type.name === 'fairy' && <img src={images.fairy} alt="fairy" className={style.typeImage}/>}
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
                     </div>
                  </Link>
                  ))}
            </div>
        
         </div>

         <div className={style.divDos}>
            <div className={style.imageContainer}>
               <img className={style.image} src={current.image} alt={current.name} />
            </div>
            <div className={style.caracteristics}>
               <h3>HitPoints: {current.hitPoints} </h3>
               <h3>Defense: {current.defense} </h3>
               <h3>Speed: {current.speed}</h3>
               <h3>Attack: {current.attack} </h3>
               <h4>weight: {current.weight}</h4>
               <h4>height: {current.height}</h4>
            </div>
         </div>

         </>
      ) : (
         <h3 className={style.caracteristics}>Loading...</h3>
      )}
      </div>
    
 );
};

 export default Detail;