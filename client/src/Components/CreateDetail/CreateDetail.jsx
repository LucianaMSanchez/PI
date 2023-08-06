
import style from "./CreateDetail.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";


const CreateDetail = () => {
   
   const {id} = useParams();
   const newPokemons = useSelector((state) => state.newPokemons)
   const error = useSelector((state) => state.error)
   const [pokemon, setPokemon]= useState({});

   useEffect(() => {
      const foundPokemon = newPokemons.find((poke) => poke.id === id);
      if (foundPokemon) {
        setPokemon(foundPokemon);
      } else {
        window.alert(error);
      }
    }, [id, newPokemons, error]);

    
 return (
   <div >
    <div className={style.container}>
      { pokemon.name ? (
         <>
         <div className={style.divUno}>
            <div>
                <h1>One of your own pokémons</h1>
            </div>
            <div>
               <h2 className={style.name}>{pokemon.name} </h2>
            </div>
            <div className={style.divDos}>
               <img className={style.image} src={pokemon.image} alt='pokemon' />
            </div>
            <div className={style.caracteristics}>
               <h3>HitPoints: {pokemon.hitPoints} </h3>
               <h3>Attack: {pokemon.attack} </h3>
               <h3>Defense: {pokemon.defense} </h3>
               <h3>Speed: {pokemon.speed}</h3>
               <h4>weight: {pokemon.weight}</h4>
               <h4>height: {pokemon.height}</h4>
            </div>
         </div>

         </>
      ) : (
         <h3>Loading...</h3>
      )}
    </div>

         <div className={style.container2}>
                    {pokemon.types?.map((type) => (
                        <div key={type} className={style.type}>
                           <div to={`/typeDetail/${type}`} > 
                              <img
                              src={`../../assets/types/${type}.png`} 
                              alt={type}
                              className={style.typeImage}
                              />
                           </div>
                           <span>{type}</span>
                        </div>
                     ))}
         </div>

         <div>
            <Link to="/home">
                <h2 className={style.goBack}>GO BACK!</h2>
            </Link>
         </div>

    </div>
 );
};

 export default CreateDetail;

