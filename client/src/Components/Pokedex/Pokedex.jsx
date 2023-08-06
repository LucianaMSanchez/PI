import style from "./Pokedex.module.css";
import React, { useEffect } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { clearPokemons, getPokedex } from "../../redux/actions";


const Pokedex = () => {

    let pokemons = useSelector((state) => state.pokemons);
    let pokedex = useSelector((state) => state.pokedex);
    let userId = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearPokemons());
        dispatch(getPokedex(userId));
      
        return () => {
          dispatch(clearPokemons());
        };
      }, [userId, dispatch]);

  
    return(
        <div className={style.back}>
           
            {pokemons ? (
            <div className={style.container}>
           {pokemons.map(({ id, name, image, types}) => {
                return <Card 
                key={id}
                id={id} 
                name={name} 
                image={image} 
                types={types}
                />;
            })}
            </div>
             ) : (
                <div className={style.container}>
                {pokedex?.map(({ id, name, image, types}) => {
                     return <Card 
                     key={id}
                     id={id} 
                     name={name} 
                     image={image} 
                     types={types}
                     />;
                 })}
                </div>
            )}
        </div>
    )
};

export default Pokedex;