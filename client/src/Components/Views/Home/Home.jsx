import React from "react";
import { useSelector } from "react-redux";
import { Cards, Filters, Types } from "../../index";
import style from "./Home.module.css"
import icons from "../../../utils/icons";



const Home = () =>{

    let pokemons = useSelector((state) => state.pokemons);
    let allPokemons = useSelector((state) => state.allPokemons);


return (


    <div className={style.contain}>
        <div>
            <Filters pokemons={pokemons} allPokemons={allPokemons} /> 
            <div className={style.links}>
                <a href="https://www.pokemon.com/el" target='_blank'><img className={style.link} src={icons.siteIcon} alt="Official site" /></a>
                <a href="https://www.youtube.com/PokemonLATAM" target='_blank'><img className={style.link} src={icons.youtubeIcon} alt="youTube" /></a>
                <a href="https://www.instagram.com/pokemon/?hl=es" target='_blank'><img className={style.link} src={icons.instaIcon} alt="Instagram" /></a>
                <a href="https://www.facebook.com/PokemonOficialLatAm/?brand_redir=230809307041021&locale=es_LA" target='_blank'><img className={style.link} src={icons.faceIcon} alt="Facebook" /></a>
            </div>
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