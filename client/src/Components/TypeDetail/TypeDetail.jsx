import style from "./TypeDetail.module.css";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { createType, addPokToType, clearPokemons, clearTypes } from "../../redux/actions";


const TypeDetail = () => {

    const dispatch = useDispatch()
    const created = useSelector((state) => state.created)
    const pokemons = useSelector((state) => state.pokemons)
    const {name} = useParams();
 
    useEffect(() => {
        if (name) {
            dispatch(createType(name));
            dispatch(addPokToType(name));
        }
      return () => {
            dispatch(clearPokemons());
            dispatch(clearTypes());
        }
    }, [name, dispatch]);

    
 return (
    <div className={style.back}>

      { created.name ? (
         <>
         <div className={style.div}>
            <div>
                <img
                src={`../../assets/types/${created.name}.png`} 
                alt={created.name}
                className={style.typeImage}
                />            
            </div>
            <div>
                <h2 className={style.name}>{created.name} </h2>
            </div>
        </div>

            <div >
                <div className={style.container}>
                    {pokemons?.map((pokemon) => (
                    <div key={pokemon} className={style.pokemon}>
                        <Link to={`/detail/${pokemon.id}`} > 
                            <span>{pokemon.name}</span>
                        </Link>
                    </div>
                    ))}
                </div>
            </div>

            <div className={style.divDos}>
                <Link to="/home">
                    <h2 className={style.goBack}>GO BACK!</h2>
                </Link>
            </div>
         </>
      ) : (
         <h3>Loading...</h3>
      )}
    </div>
 );
};

 export default TypeDetail;