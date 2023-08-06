import style from "./Cards.module.css";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from "react-redux";
import Card from '../Card/Card';
import { getOwnPokemons, getPokemons, clearPokemons, clearTypes, clearOwnPokemons, clearSearchPokemons } from "../../redux/actions";
import logo from "../../assets/logo.png";


function Cards() {

    
    let pokemons = useSelector((state) => state.pokemons); 
    const [page, setPage] = useState(1);
    const pokePerPage = 12;
    const maxPage = Math.ceil(pokemons.length / pokePerPage);
    const lastPage = maxPage + 1;
    const userId = useSelector((state) => state.user);
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (userId) {
            dispatch(getPokemons());
            dispatch(getOwnPokemons(userId));
        }
        return () => {
           dispatch(clearPokemons());
           dispatch(clearOwnPokemons());
           dispatch(clearTypes());
           dispatch(clearSearchPokemons());
       }
      }, []);

    const nextGet = () => {
        dispatch(getPokemons())
    }
    
    const previousPage = () =>{
        if((page - 1) > 0)
        setPage(page - 1)
    }

    const nextPage = () =>{
        if((page + 1) < (maxPage + 2))
        setPage(page + 1)
    }

    return <div className={style.back}>
                <div className={style.imageDiv}>
                    <img className={style.titulo} src={logo} alt="logo"/>
                </div>
                {page === lastPage ? (
                    <div >
                        <button className={style.buttonMore} onClick={nextGet}>SEE MORE</button>
                    </div>
                ) : (
                    <div className={style.container}>
                        {pokemons?.slice((page - 1) * pokePerPage, page * pokePerPage)
                        .map((poke, index) => {
                        return <Card 
                        key={index}
                        id={poke.id} 
                        name={poke.name} 
                        image={poke.image} 
                        types={poke.types}
                        />;
                        })}
                    </div>
                )}
                <div className={style.pages}>
                    <div >
                        <button onClick={previousPage} className={style.buttonPrev}>◀</button>
                    </div>
                    <div>
                        <p type="text" className={style.page}> {page} </p>
                    </div>
                    <div>
                        <button onClick={nextPage} className={style.buttonNext}>▶</button>
                    </div>
                </div>
        </div>;
}

export default Cards;

