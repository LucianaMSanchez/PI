import style from "./Pokedex.module.css";
import React, { useEffect, useState } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { clearPokemons, getPokedex } from "../../../redux/actions";
import { PokedexCard, Filters } from "../../index";


const Pokedex = () => {

    let pokemons = useSelector((state) => state.pokemons);
    let pokedex = useSelector((state) => state.pokedex);
    let userId = useSelector((state) => state.user);
    let [currentPokemons, setCurrentPokemons] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearPokemons());
        dispatch(getPokedex(userId));
        return () => {
            dispatch(clearPokemons());
        };
    }, [dispatch]);
    
    useEffect(() => {
        setCurrentPokemons(pokedex)
    }, [pokedex]);

    useEffect(() => {
        setCurrentPokemons(pokemons)
    }, [pokemons]);

  
    return (
        <div className={style.back}>
          <div className={style.container}>
            {currentPokemons?.map((pokemon) => (
              <PokedexCard key={pokemon.index} pokemon={pokemon} />
            ))}
          </div>
    
          <div>
            <Filters pokemons={pokedex} allPokemons={pokedex} />
          </div>
        </div>
      );
    };


export default Pokedex;
