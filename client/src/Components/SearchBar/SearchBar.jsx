import React from "react";
import style from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOwnPokemonId, getPokemonId, getPokemonName, getOwnPokemonName, clearPokemons } from "../../redux/actions";


const SearchBar = () => {

    const [id, setId]= useState("");
    const [name, setName]= useState("");
    const [inputValue, setInputValue]= useState(null);
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons)
    const [searched, setSearched] = useState(false);
    // const error = useSelector((state) => state.error)

    const onSearch = (input) => {
      if (pokemons.find((poke) => poke.id == input) || pokemons.find((poke) => poke.name == input)) {
        return window.alert('Pokémon repetido');
      } else {
        if (!searched) {
          dispatch(clearPokemons()); 
          setSearched(true); 
        }
        if (id) {
          dispatch(getPokemonId(id));
          dispatch(getOwnPokemonId(id));
        } else {
          dispatch(getPokemonName(name));
          dispatch(getOwnPokemonName(name));
        }
      }
    };

    const handleChange = (event) => {
      const inputValue = event.target.value;
      setInputValue(inputValue);
      if (!isNaN(inputValue)) {
        setId(inputValue);
        setName("");
      } else {
        setId("");
        setName(inputValue);
      }
    };    

    const handleSearch = () => {
      onSearch(inputValue);
      setInputValue("");
    };
    
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleSearch();
        }
      };

      const handleRandom = () => {
        const inputRandom = Math.floor(Math.random() * 1281) + 1;
        setInputValue(inputRandom); 
        setId(inputRandom); 
        setName(""); 
        handleSearch();
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