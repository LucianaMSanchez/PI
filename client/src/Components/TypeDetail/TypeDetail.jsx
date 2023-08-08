import style from "./TypeDetail.module.css";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { createType, addPokToType, clearPokemons, clearTypes } from "../../redux/actions";
import shadow from "../../assets/types/shadow.png";
import bug from "../../assets/types/bug.png";
import dark from "../../assets/types/dark.png";
import dragon from "../../assets/types/dragon.png";
import fairy from "../../assets/types/fairy.png";
import fighting from "../../assets/types/fighting.png";
import fire from "../../assets/types/fire.png";
import flying from "../../assets/types/flying.png";
import ghost from "../../assets/types/ghost.png";
import grass from "../../assets/types/grass.png";
import ground from "../../assets/types/ground.png";
import ice from "../../assets/types/ice.png";
import electric from "../../assets/types/electric.png";
import steel from "../../assets/types/steel.png";
import normal from "../../assets/types/normal.png";
import poison from "../../assets/types/poison.png";
import psychic from "../../assets/types/psychic.png";
import rock from "../../assets/types/rock.png";
import unknown from "../../assets/types/unknown.png";
import water from "../../assets/types/water.png";


const TypeDetail = () => {

    const dispatch = useDispatch()
    const created = useSelector((state) => state.createdType)
    const pokemons = useSelector((state) => state.pokemons)
    const {name} = useParams();
 
    useEffect(() => {
        if (name) {
            dispatch(createType(name));
            if(created) {
            dispatch(addPokToType(name));
            }
        }
      return () => {
            dispatch(clearPokemons());
            dispatch(clearTypes());
        }
    }, [name]);

    const switchBackColor = (type) => {
        switch (type) {
            case "shadow":
                return style.backShadow;
            case "fire":
                return style.backFire;
            case "water":
                return style.backWater;
            case "dark":
                return style.backDark;
            case "bug":
                return style.backBug;
            case "dragon":
                return style.backDragon;
            case "electric":
                return style.backElectric;
            case "grass":
                return style.backGrass;
            case "poison":
                return style.backPoison;
            case "ice":
                return style.backIce;
            case "fighting":
                return style.backFighting;
            case "flying":
                return style.backFlying;
            case "unknown":
                return style.backUnknown;
            case "normal":
                return style.backNormal;
            case "fairy":
                return style.backFairy;
            case "psychic":
                return style.backPsychic;
            case "rock":
                return style.backRock;
            case "ground":
                return style.backGround;
            case "ghost":
                return style.backGhost;
            case "steel":
                return style.backSteel
            default:
                return "";
        }
    }

    const backColor = switchBackColor(name);

 return (
    <div className={backColor}> 

        <div className={style.divUno}>
            <Link to="/home">
                <h2 className={style.goBack}>GO BACK!</h2>
            </Link>
        </div>
      { created.name ? (
         <>
        <div className={style.divDos}> 
            <div className={style.type}>
                <h1 className={style.name}>{created.name} </h1>            
                    {created.name === 'shadow' && <img src={shadow} alt="shadow" className={style.typeImage}/>}
                    {created.name === 'bug' && <img src={bug} alt="bug" className={style.typeImage}/>}
                    {created.name === 'dark' && <img src={dark} alt="dark" className={style.typeImage}/>}
                    {created.name === 'dragon' && <img src={dragon} alt="dragon" className={style.typeImage}/>}
                    {created.name === 'fairy' && <img src={fairy} alt="fairy" className={style.typeImage}/>}
                    {created.name === 'fighting' && <img src={fighting} alt="fighting" className={style.typeImage}/>}
                    {created.name === 'fire' && <img src={fire} alt="fire" className={style.typeImage}/>}
                    {created.name === 'flying' && <img src={flying} alt="flying" className={style.typeImage}/>}
                    {created.name === 'ghost' && <img src={ghost} alt="ghost" className={style.typeImage}/>}
                    {created.name === 'grass' && <img src={grass} alt="grass" className={style.typeImage}/>}
                    {created.name === 'ground' && <img src={ground} alt="ground" className={style.typeImage}/>}
                    {created.name === 'ice' && <img src={ice} alt="ice" className={style.typeImage}/>}
                    {created.name === 'electric' && <img src={electric} alt="electric" className={style.typeImage}/>}
                    {created.name === 'steel' && <img src={steel} alt="steel" className={style.typeImage}/>}
                    {created.name === 'normal' && <img src={normal} alt="normal" className={style.typeImage}/>}
                    {created.name === 'poison' && <img src={poison} alt="poison" className={style.typeImage}/>}
                    {created.name === 'psychic' && <img src={psychic} alt="psychic" className={style.typeImage}/>}
                    {created.name === 'rock' && <img src={rock} alt="rock" className={style.typeImage}/>}
                    {created.name === 'unknown' && <img src={unknown} alt="unknown" className={style.typeImage}/>}
                    {created.name === 'water' && <img src={water} alt="water" className={style.typeImage}/>}          
            </div>
            <div className={style.caracteristics}>
               <h2>Double Damage From: <span>{created.DDF}</span></h2>
               <h2>Double Damage To: <span>{created.DDT}</span></h2>
               <h3>Half Damage From: <span>{created.HDF}</span></h3>
               <h3>Half Damage To: <span>{created.HDT}</span> </h3>
               <h4>No Damage From: <span>{created.NDF}</span></h4>
               <h4>No Damage To: <span>{created.NDT}</span></h4>
            </div>
        </div>

        <div >
            <div className={style.container}>
                {pokemons?.map((pokemon) => (
                <div key={pokemon.name}>
                    <Link to={`/detail/${pokemon.id}`} >
                        <img src={pokemon.image} alt="pokemonRelated" className={style.imageRel}/> 
                    </Link>
                </div>
                ))}
            </div>
        </div>

         </>
      ) : (
         <h3 className={style.caracteristics}>Loading...</h3>
      )}
    </div>
 );
};

 export default TypeDetail;