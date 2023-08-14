import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPokemons, getPokemonId } from "../../../redux/actions";
import { PokedexCard } from "../../index";
import style from "./Play.module.css";


function Play() {

   const pokemons = useSelector((state) => state.pokemons);
   const champs = useSelector((state) => state.champs);
   const [hidden, setHidden] = useState(true);
   const dispatch = useDispatch()
   

   useEffect(() => {
         dispatch(clearPokemons());
      return () => {
         dispatch(clearPokemons());
     };
   }, []);

   const displayRandom = () =>{
      const count = 0;
      while(count < 4){
         const idRandom = Math.floor(Math.random() * 1281) + 1;
         dispatch(getPokemonId(idRandom));
      }
   };
   
   const showRandom = () =>{
      setHidden(false);
   };
   
   const play = () => {
      showRandom()
// chat gpt prompt
   };

   

   return (
    
      <div className={style.back}>
         <div className={style.container1}>
               {pokemons?.map((poke)=> (
                  <PokedexCard key={poke.index} pokemon={poke} className={hidden ? style.hidden : null}/>
               ))}
               <button className={style.buttonDisplay} onClick={displayRandom}>DISPLAY RANDOM</button>
         </div>
         <div className={style.container2}>
         {champs?.map((champ)=> (
                  <PokedexCard key={champ.index} pokemon={champ} />
               ))}
               <button className={style.buttonPlay} onClick={play}>PLAY</button>
         </div>
      </div>
   );
}



export default Play;


