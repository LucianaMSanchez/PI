import React from "react";
import style from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOwnPokemonId, getPokemonId, getPokemonName, getOwnPokemonName } from "../../redux/actions";


const SearchBar = () => {

    const [id, setId]= useState("");
    const [name, setName]= useState("");
    const [inputValue, setInputValue]= useState(null);
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons)
    // const error = useSelector((state) => state.error)

    const onSearch = (input) => {
      if (pokemons.find((poke) => poke.id == input) || pokemons.find((poke) => poke.name == input)) {
        return window.alert('Repeated pokémon');
      } else {
        if(id) {
          dispatch(getPokemonId(id))
          dispatch(getOwnPokemonId(id))
          } else {
          dispatch(getPokemonName(name))
          dispatch(getOwnPokemonName(name))
          }
      };
    };

    const handleChange = (event) => {
      if(isNaN(event.target.value)) setName(event.target.value)
      setId(event.target.value)
      setInputValue(event.target.value)
      };

    const handleSearch = () => {
      onSearch(inputValue); 
      setId("");    
      setName("");    
      };

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleSearch();
        }
      };


    const handleRandom = () => {
      onSearch(Math.floor(Math.random() * 1281) + 1)
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