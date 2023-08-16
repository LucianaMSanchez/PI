import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOwnPokemonId, getPokemonId, getPokemonName, getOwnPokemonName, clearPokemons } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {

    const pokemons = useSelector((state) => state.pokemons);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [searched, setSearched] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setInputValue(event.target.value);
        if (!isNaN(event.target.value)) {
            setId(event.target.value);
            setName("");
        } else if (isNaN(event.target.value)){
            setId("");
            setName(event.target.value);
        }
    };

    const handleSearch = () => {
        if (pokemons.find((poke) => poke.id == inputValue) || pokemons.find((poke) => poke.name == inputValue)) {
            setError('Repeated Pokémon');
        } else {
            if (id) {
                id < 1282 
                ? dispatch(getPokemonId(id))
                : dispatch(getOwnPokemonId(id));
            } else if(name){
                dispatch(getPokemonName(name));
                dispatch(getOwnPokemonName(name));
            }
            if(!searched){
              dispatch(clearPokemons());
              setSearched(true);
            }
            setInputValue("");
        }
    };
    
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleRandom = () => {
        const inputRandom = Math.floor(Math.random() * 1281) + 1;
        dispatch(getPokemonId(inputRandom));
        if(!searched){
          dispatch(clearPokemons());
          setSearched(true);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setError("");
        }, 3000);
        }, [error]);

    return (
        <div className={style.bar}>
            <button className={style.randomButton} onClick={handleRandom}>
                Surprise me!
            </button>
            <input
                type="search"
                className={style.searchInput}
                placeholder="Search by Id or Name"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={inputValue}
            />
            <button className={style.searchButton} onClick={handleSearch}>
                Search
            </button>
            {error ? (
                <p className={style.error}>{error}</p>
            ) : ( null)}
        </div>
    );
}

export default SearchBar;
