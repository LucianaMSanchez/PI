import React from "react";
import { useSelector } from "react-redux";
import style from "./Home.module.css"
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import Types from "../Types/Types";


const Home = () =>{

    let pokemons = useSelector((state) => state.pokemons);
    let allPokemons = useSelector((state) => state.allPokemons);


return (


    <div className={style.contain}>
        <div>
            <Filters pokemons={pokemons} allPokemons={allPokemons} /> 
        </div>
        <div>
            <Cards /> 
        </div>
        <div>
            <Types />
        </div>
    </div>
    
    );
};

export default Home;