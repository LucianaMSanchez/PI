import style from "./PokedexCard.module.css";
import React from "react"; 
import { Link } from "react-router-dom";
import images from "../../utils/images";


const PokedexCard = ({pokemon}) => {

    const switchBackCard = (type) => {
        switch (type) {
            case "shadow":
                return style.cardShadow;
            case "fire":
                return style.cardFire;
            case "water":
                return style.cardWater;
            case "dark":
                return style.cardDark;
            case "bug":
                return style.cardBug;
            case "dragon":
                return style.cardDragon;
            case "electric":
                return style.cardElectric;
            case "grass":
                return style.cardGrass;
            case "poison":
                return style.cardPoison;
            case "ice":
                return style.cardIce;
            case "fighting":
                return style.cardFighting;
            case "flying":
                return style.cardFlying;
            case "unknown":
                return style.cardUnknown;
            case "normal":
                return style.cardNormal;
            case "fairy":
                return style.cardFairy;
            case "psychic":
                return style.cardPsychic;
            case "rock":
                return style.cardRock;
            case "ground":
                return style.cardGround;
            case "ghost":
                return style.cardGhost;
            case "steel":
                return style.cardSteel
            default:
                return "";
        }
    }

return (
    <Link to={pokemon.id < 1282 ? `/Detail/${pokemon.id}` : `/CreateDetail/${pokemon.id}`} >
    <div className={switchBackCard(pokemon.types[0])}>
        <div className={style.miniContainer}>
            <h1 className={style.name}>{pokemon.name.toUpperCase()}</h1>
                {pokemon.types?.map((type, index) => (
                    <div key={index} className={style.types}>
                        {type.name === 'shadow' && <img src={images.shadow} alt="shadow" className={style.typeImage}/>}
                        {type.name === 'bug' && <img src={images.bug} alt="bug" className={style.typeImage}/>}
                        {type.name === 'dark' && <img src={images.dark} alt="dark" className={style.typeImage}/>}
                        {type.name === 'dragon' && <img src={images.dragon} alt="dragon" className={style.typeImage}/>}
                        {type.name === 'fairy' && <img src={images.fairy} alt="fairy" className={style.typeImage}/>}
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
                ))}   
        </div>

        <div className={style.imageContainer}>
            <img src={pokemon.image} alt="imagePoke" className={style.imagePoke}/>
        </div>

        <div className={style.infContainer}>
            <div className={style.caracteristics}>
                <h3 className={style.text}>HP: <span>{pokemon.hitPoints}</span></h3>
                <h3 className={style.text}>Attack: <span>{pokemon.attack}</span></h3>
                <h3 className={style.text}>Defense: <span>{pokemon.defense}</span></h3>
                <h3 className={style.text}>Speed: <span>{pokemon.speed}</span> </h3>                                  
            </div>
        </div> 
            <div className={style.idDiv}>
                <h2 className={style.id}>{pokemon.id}</h2> 
            </div>               
    </div>          
</Link>
    )
}


export default PokedexCard;