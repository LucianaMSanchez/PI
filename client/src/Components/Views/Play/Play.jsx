import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPokemons, getRandomPokemons, clearChamps } from "../../../redux/actions";
import { PokedexCard } from "../../index";
import style from "./Play.module.css";



const Play = () => {

   const pokemons = useSelector((state) => state.pokemons);
   const champs = useSelector((state) => state.champs);
   const [showWinnerMessage, setShowWinnerMessage] = useState(false);
   const [showLooserMessage, setShowLooserMessage] = useState(false);
   const [showTieMessage, setShowTieMessage] = useState(false);
   const [display, setDisplay] = useState(false);
   const [play, setPlay] = useState(false);
   const dispatch = useDispatch()
   

   useEffect(() => {
         dispatch(clearPokemons());
      return () => {
         dispatch(clearPokemons());
         dispatch(clearChamps());
     };
   }, []);

   const displayRandom = () => {
      if(!display){
         dispatch(getRandomPokemons(4))
   }
      setDisplay(true);
   };

   const winningPokes = [];
   const winningChamps = [];
   const winningCards = [];

   
   const playGame = () => {
      if(!play) {
   
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
      
      console.log(champWins)
       
      if (champWins > pokeWins) {
            winningChamps.push(champ);
            winningCards.push(champ.id);
         } 
      if (champWins < pokeWins) {
            winningPokes.push(poke);
            winningCards.push(poke.id);
         } 
      console.log(winningCards)
      });
      
      setTimeout(() => {
         if (winningChamps.length >= 3) {
            setShowWinnerMessage(true);
         } else if (winningChamps.length === 2) {
            setShowTieMessage(true);
         } else {
            setShowLooserMessage(true);
         }
      }, 1000);

      setPlay(true);
      }
   };
   
   const isWinningCard = (card) => winningCards.includes(card.id);
  

   return (
    
      <div className={style.back}>
         <div className={style.container1}>
               {pokemons?.map((poke)=> (
                  <div>
                  <PokedexCard
                     key={poke.index}
                     pokemon={poke}
                  />
                    { isWinningCard(poke) ? (
                     <div>
                        🌟
                     </div>
                  ) : (null)}
                  </div>
               ))}
         </div>
         <div className={style.buttonPlayDiv}>
            <button className={style.buttonDisplay} onClick={displayRandom}>DISPLAY RANDOM</button>
            <button className={style.buttonPlay} onClick={playGame}>PLAY</button>
         </div>
         <div className={style.container2}>
            {champs?.map((champ) => (
               <div >
               <PokedexCard
                  key={champ.index}
                  pokemon={champ}
                  />
                  { isWinningCard(champ) ? (
                     <div>
                        🌟
                     </div>
                  ) : (null)}
               </div>
            ))}
         </div>
         {showWinnerMessage && (
         <div className={style.popUp}>
            YOU WIN!!
         </div>
      )}
            {showLooserMessage && (
         <div className={style.popUp}>
            YOU LOSE!!
         </div>
      )}
            {showTieMessage && (
         <div className={style.popUp}>
            IT'S A TIE!!
         </div>
      )}
      </div>
   );
}



export default Play;


