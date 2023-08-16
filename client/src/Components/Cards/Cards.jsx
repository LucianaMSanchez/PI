import style from "./Cards.module.css";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from "react-redux";
import { Card } from "../index";
import { getOwnPokemons, getPokemons, clearPokemons, clearTypes, getRandomPokemons, clearError } from "../../redux/actions";
import logo from "../../assets/logo.png";


function Cards() {

    
    const pokemons = useSelector((state) => state.pokemons); 
    const error = useSelector((state) => state.error); 
    const userId = useSelector((state) => state.user);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch()
    const pokePerPage = 12;
    const maxPage = Math.ceil(pokemons.length / pokePerPage);
   
    useEffect(() => {
        if (userId) {
            dispatch(getPokemons());
            dispatch(getOwnPokemons(userId));
        }
        return () => {
           dispatch(clearPokemons());
       }
      }, []);

    const randomGet = () => {
        dispatch(getRandomPokemons(12))
    }
    
    const previousPage = () =>{
        if((page - 1) > 0)
        setPage(page - 1)
    }

    const nextPage = () =>{
        if((page + 1) < (maxPage + 1))
        setPage(page + 1)
    }

    useEffect(() => {
        setPage(1)
      }, [pokemons]);

    useEffect(() => {
        setTimeout(() => {
            dispatch(clearError());
        }, 3000);
        }, [error]);

    return (
    
        <div className={style.back}>
        {error ? (
                <p className={style.error}>{error}</p>
            ) : ( null)}
       
            <div className={style.divUno}>
                <div className={style.imageDiv}>
                    <img className={style.titulo} src={logo} alt="logo"/>
                </div>
                <div className={style.buttonDiv}>
                    <button className={style.buttonMore} onClick={randomGet}>RELEASE RANDOM</button>
                </div>
            </div>
                    {pokemons.length > 0 ? (
                        <>
                    <div className={style.container}>
                        {pokemons?.slice((page - 1) * pokePerPage, page * pokePerPage).map((poke, index) => {
                            return <Card 
                            key={index}
                            id={poke.id} 
                            name={poke.name} 
                            image={poke.image} 
                            types={poke.types}
                        />;
                        })}
                    </div>
        
                <div className={style.pages}>
                    <div >
                        <button onClick={previousPage} className={page === 1 ? style.hidden : style.buttonPrev}>◀</button>
                    </div>
                    <div>
                        <p type="text" className={style.page}> {page} </p>
                    </div>
                    <div>
                        <button onClick={nextPage} className={page === maxPage ? style.hidden : style.buttonNext}>▶</button>
                    </div>
                </div>
                </>
            ) : (
                    <div className={style.pokeball}></div>
            )}
        </div>
    );
}

export default Cards;

