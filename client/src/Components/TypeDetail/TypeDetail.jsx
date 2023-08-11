import style from "./TypeDetail.module.css";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { createType, addPokToType, clearPokemons, clearTypes, clearCreated } from "../../redux/actions";
import images from "../../utils/images";


const TypeDetail = () => {

    const dispatch = useDispatch()
    const created = useSelector((state) => state.createdType)
    const pokemons = useSelector((state) => state.pokemons)
    const {name} = useParams();
 
    useEffect(() => {
        if (name) {
            dispatch(clearPokemons())
            dispatch(createType(name));
            if(created) {
            dispatch(addPokToType(name));
            }
        }
      return () => {
            dispatch(clearPokemons());
            dispatch(clearTypes());
            dispatch(clearCreated());
        }
    }, [name]);

    const switchBackColor = (type) => {
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
    const switchImageRel = (type) => {
        switch (type) {
            case "shadow":
                return style.imageShadow;
            case "fire":
                return style.imageFire;
            case "water":
                return style.imageWater;
            case "dark":
                return style.imageDark;
            case "bug":
                return style.imageBug;
            case "dragon":
                return style.imageDragon;
            case "electric":
                return style.imageElectric;
            case "grass":
                return style.imageGrass;
            case "poison":
                return style.imagePoison;
            case "ice":
                return style.imageIce;
            case "fighting":
                return style.imageFighting;
            case "flying":
                return style.imageFlying;
            case "unknown":
                return style.imageUnknown;
            case "normal":
                return style.imageNormal;
            case "fairy":
                return style.imageFairy;
            case "psychic":
                return style.imagePsychic;
            case "rock":
                return style.imageRock;
            case "ground":
                return style.imageGround;
            case "ghost":
                return style.imageGhost;
            case "steel":
                return style.imageSteel
            default:
                return "";
        }
    }

    const backCard = switchBackColor(name);

    const imageRel = switchImageRel(name)

 return (
    <div className={style.back}> 

        <div className={style.divUno}>
            <Link to="/home">
                <h2 className={style.goBack}>GO HOME!</h2>
            </Link>
        </div>
      { created.name ? (
         <>
        <div className={style.divDos}> 
            <div className={backCard}> 
                <div className={style.type}>
                    <h1 className={style.name}>{created.name.toUpperCase()} </h1>            
                        {created.name === 'shadow' && <img src={images.shadow} alt="shadow" className={style.typeImage}/>}
                        {created.name === 'bug' && <img src={images.bug} alt="bug" className={style.typeImage}/>}
                        {created.name === 'dark' && <img src={images.dark} alt="dark" className={style.typeImage}/>}
                        {created.name === 'dragon' && <img src={images.dragon} alt="dragon" className={style.typeImage}/>}
                        {created.name === 'fairy' && <img src={images.fairy} alt="fairy" className={style.typeImage}/>}
                        {created.name === 'fighting' && <img src={images.fighting} alt="fighting" className={style.typeImage}/>}
                        {created.name === 'fire' && <img src={images.fire} alt="fire" className={style.typeImage}/>}
                        {created.name === 'flying' && <img src={images.flying} alt="flying" className={style.typeImage}/>}
                        {created.name === 'ghost' && <img src={images.ghost} alt="ghost" className={style.typeImage}/>}
                        {created.name === 'grass' && <img src={images.grass} alt="grass" className={style.typeImage}/>}
                        {created.name === 'ground' && <img src={images.ground} alt="ground" className={style.typeImage}/>}
                        {created.name === 'ice' && <img src={images.ice} alt="ice" className={style.typeImage}/>}
                        {created.name === 'electric' && <img src={images.electric} alt="electric" className={style.typeImage}/>}
                        {created.name === 'steel' && <img src={images.steel} alt="steel" className={style.typeImage}/>}
                        {created.name === 'normal' && <img src={images.normal} alt="normal" className={style.typeImage}/>}
                        {created.name === 'poison' && <img src={images.poison} alt="poison" className={style.typeImage}/>}
                        {created.name === 'psychic' && <img src={images.psychic} alt="psychic" className={style.typeImage}/>}
                        {created.name === 'rock' && <img src={images.rock} alt="rock" className={style.typeImage}/>}
                        {created.name === 'unknown' && <img src={images.unknown} alt="unknown" className={style.typeImage}/>}
                        {created.name === 'water' && <img src={images.water} alt="water" className={style.typeImage}/>}          
                </div>
                <div className={style.caracteristics}>
                    <h2 className={style.text}>Double Damage From: <span>{created.DDF[0]}</span></h2>
                    <h2 className={style.text}>Double Damage To: <span>{created.DDT[0]}</span></h2>
                    <h3 className={style.text}>Half Damage From: <span>{created.HDF[0]}</span></h3>
                    <h3 className={style.text}>Half Damage To: <span>{created.HDT[0]}</span> </h3>
                    <h4 className={style.text}>No Damage From: <span>{created.NDF[0]}</span></h4>
                    <h4 className={style.text}>No Damage To: <span>{created.NDT[0]}</span></h4>
                </div>
            </div>
        </div>
        
        <div >
            <div className={style.container}>
                {pokemons?.map((pokemon) => (
                <div key={pokemon.name}>
                    <Link to={`/detail/${pokemon.id}`} >
                        <img src={pokemon.image} alt="pokemonRelated" className={imageRel}/> 
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