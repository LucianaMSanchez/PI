import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOwnPokemonId, getPokemonId, getPokemonName, getOwnPokemonName, clearPokemons } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {

    const pokemons = useSelector((state) => state.pokemons);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [searched, setSearched] = useState(false);
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
            return window.alert('Repeated Pokémon');
        } else {
            if (id) {
                dispatch(getPokemonId(id));
                dispatch(getOwnPokemonId(id));
            } else if(name){
                dispatch(getPokemonName(name));
                dispatch(getOwnPokemonName(name));
            }
            setInputValue("");
            if(!searched){
              dispatch(clearPokemons());
              setSearched(true);
            }
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
        </div>
    );
}

export default SearchBar;
