import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPokemon, addTypeToPok, clearPokemons, clearTypes, addPokedex, removePokedex, clearCreated, getOwnPokemonId } from "../../../redux/actions";
import { switchBackColor, switchIcon } from "../../../utils/switchs";
import style from "./Detail.module.css";


const Detail = () => {
   
   const {id} = useParams();
   const dispatch = useDispatch()
   const created = useSelector((state) => state.createdPoke)
   const types = useSelector((state) => state.types)
   const pokedex = useSelector((state) => state.pokedex)
   const userId = useSelector((state) => state.user);
   const [isFav, setIsFav] = useState(false);
   const [backDetail, setBackDetail] = useState(""); 

 
   useEffect(() => {
      if (id > 1281) {
         dispatch(getOwnPokemonId(id))
         if(created) dispatch(addTypeToPok(id))
      } else {
         dispatch(createPokemon(id));
         if(created) dispatch(addTypeToPok(id))
      }
      return () => {
          dispatch(clearPokemons());
          dispatch(clearTypes());
          dispatch(clearCreated());
      };
   }, [id]);
  
   useEffect(() => {
        const found = pokedex.find((poke=> poke.id == id))
        if(found){
        setIsFav(true)
        }
   }, [id]);

   const handlePokedex = () => {
      if (isFav){
         setIsFav(false)
         dispatch(removePokedex(id, userId));
      } else {
         setIsFav(true)
         dispatch(addPokedex(id, userId));
      }
   };

   useEffect(() => {
      if (created && created.types && created.types.length > 0) {
        const typeBack = created.types[0];
        const detail = switchBackColor(style, typeBack);
        setBackDetail(detail); 
      }
    }, [created]);

    
 return (
    <div className={backDetail}>
      { created.name ? (
         <>
         <div className={style.divUno}>
            <div>
               <Link to="/home">
                  <h2 className={style.goBack}>GO HOME!</h2>
               </Link>
            </div>
            <div className={style.miniContainer}>
               <div>
                  <h2 className={style.name}>{created.name} </h2>
               </div>
               {types?.map((type) => (
                  <Link to={`/typeDetail/${type.name}`} > 
                      <div key={type.name} className={style.type}>
                           <img src={switchIcon(type.name)} alt="type" className={style.typeImage}/>
                     </div>
                  </Link>
               ))}
            </div>
            <div>
                {created.id < 1282 ? (
               <button onClick={handlePokedex} className={style.fav}> {isFav ? "ADDED TO POKEDEX✅" : "ADD TO POKEDEX⬜" }</button>
                ) : ( null )}
               </div>
         </div>

         <div className={style.divDos}>
            <div className={style.imageContainer}>
               <img className={style.image} src={created.image} alt={created.name} />
            </div>
            <div className={style.caracteristics}>
               <h3>HitPoints: {created.hitPoints} </h3>
               <h3>Defense: {created.defense} </h3>
               <h3>Speed: {created.speed}</h3>
               <h3>Attack: {created.attack} </h3>
               <h4>weight: {created.weight}</h4>
               <h4>height: {created.height}</h4>
            </div>
         </div>

         </>
      ) : (
        <div className={style.pokeball}></div>
      )}
      </div>
    
 );
};

 export default Detail;

