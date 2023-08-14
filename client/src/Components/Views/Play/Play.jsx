import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPokemons, getRandomPokemons } from "../../../redux/actions";
import { PokedexCard } from "../../index";
import style from "./Play.module.css";


const Play = () => {

   const pokemons = useSelector((state) => state.pokemons);
   const champs = useSelector((state) => state.champs);
   const [hidden, setHidden] = useState(true);
   const [display, setDisplay] = useState(false);
   const dispatch = useDispatch()
   

   useEffect(() => {
         dispatch(clearPokemons());
      return () => {
         dispatch(clearPokemons());
     };
   }, []);

   const displayRandom = () => {
      if(!display){
         dispatch(getRandomPokemons(4))
   }
   setDisplay(true);
   };

   const showRandom = () =>{
      setHidden(false);
   };
   
   const playGame = () => {
      showRandom()
      const winningCards = [];
   
      pokemons.forEach((poke, index) => {
         const champ = champs[index];
   
         const pokeStats = {
            hitPoints: poke.hitPoints,
            attack: poke.attack,
            defense: poke.defense,
            speed: poke.speed
         };
   
         const champStats = {
            hitPoints: champ.hitPoints,
            attack: champ.attack,
            defense: champ.defense,
            speed: champ.speed
         };
   
         let pokeWins = 0;
         let champWins = 0;
   
         for (const stat in pokeStats) {
            if (pokeStats[stat] > champStats[stat]) {
               pokeWins++;
            } else if (pokeStats[stat] < champStats[stat]) {
               champWins++;
            }
         }
   
         if (champWins > pokeWins) {
            winningCards.push(champ);
         } 
      });
   

      const userWins = winningCards.length >= 3;

      if (userWins) {
         console.log("You win!");
      } else {
         console.log("You lose.");
      }
   }
   

   return (
    
      <div className={style.back}>
         <div className={style.container1}>
               {pokemons?.map((poke)=> (
                  <PokedexCard key={poke.index} pokemon={poke} className={hidden ? style.hidden : null}/>
               ))}
               <button className={style.buttonDisplay} onClick={displayRandom}>DISPLAY RANDOM</button>
         </div>
         <div className={style.buttonPlayDiv}>
            <button className={style.buttonPlay} onClick={playGame}>PLAY</button>
         </div>
         <div className={style.container2}>
         {champs?.map((champ)=> (
                  <PokedexCard key={champ.index} pokemon={champ} />
               ))}
         </div>
      </div>
   );
}



export default Play;


