import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { createType, addPokToType, clearPokemons, clearTypes, clearCreated } from "../../../redux/actions";
import { switchBackColor, switchImageRel, switchIcon } from "../../../utils/switchs";
import style from "./TypeDetail.module.css";


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


    const backCard = switchBackColor(style, name);

    const imageRel = switchImageRel(style, name)

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
                    <img src={switchIcon(created.name)} alt="type" className={style.typeImage}/>
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
         <div className={style.pokeball}></div>
      )}
    </div>
 );
};

 export default TypeDetail;