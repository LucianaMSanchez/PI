import style from "./CreatePoke.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokedexCard from "../PokedexCard/PokedexCard";
import validation from "../../utils/validationsNewPoke";
import {clearPokemons, clearOwnPokemons, createOwnPokemon, getPokemonId} from "../../redux/actions";



const Create = () => { 

    const newPokemons = useSelector((state) => state.newPokemons);
    const current = useSelector((state) => state.current);
    const userId = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [errors, setErrors]= useState({});
    const [image, setImage] = useState(null);
    const [pokeData, setPokeData] = useState({
        id: "",
        name: "",
        image: "",
        hitPoints: null,
        attack: null,
        defense: null,
        speed: null,
        height:null,
        weight: null,
        type1: "",
        type2: "",
    });
    

    const handleChange = (event) => {
        setPokeData({...pokeData, [event.target.name]: event.target.value});
        setErrors(validation({...pokeData, [event.target.name]: event.target.value}));
    };
    
    const handleRandom = () => {
        const idRandom = Math.floor(Math.random() * 1281) + 1;
        dispatch(getPokemonId(idRandom));
    }
    
    useEffect(() => {
        setPokeData(pokeData => ({ ...pokeData, image: current.image }));
    }, [current]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPokeData({ ...pokeData, [name]: value });
    }; 

    useEffect(() => {
        setImage(pokeData.image);
    }, [pokeData.image]);
    
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(createOwnPokemon(pokeData, userId));
    };

    useEffect(() => {
        return () => {
            dispatch(clearPokemons());
            dispatch(clearOwnPokemons());
        };
    }, []);
    
    useEffect(() => {
        setPokeData({
            id: "",
            name: "",
            image: "",
            hitPoints: "",
            attack: "",
            defense: "",
            speed: "",
            height:"",
            weight: "",
            type1: "",
            type2: "",
        });
    }, [newPokemons]);


return (
<div className={style.back}>
<div className={style.container}>
    <form onSubmit={submitHandler}>

        <div className={style.row}>
            <div className={style.col1}>
                <label for="id">Number</label>
            </div>
            <div className={style.col2}>
                <input type="number" key="id" name="id" placeholder="Choose a number" value={pokeData.id} onChange={handleChange}/><br/>
                {errors.id ?  <span className={style.error}>{errors.id}</span> : null}
            </div>
        </div>

        <div className={style.row}>
            <div className={style.col1}>
                <label for="name">Name</label>
            </div>
            <div className={style.col2}>
                <input type="text" key="name" name="name" placeholder="Choose a name for your pokémon" value={pokeData.name} onChange={handleChange} /><br/>
                {errors.name ?  <span className={style.error}>{errors.name}</span> : null}
            </div>
        </div>

        <div className={style.row}>
            <div className={style.col1}>
                <label for="hitPoints">HitPoints</label>
            </div>
            <div className={style.col2}>
                <input type="number" key="hitPoints" name="hitPoints" placeholder="0-100" value={pokeData.hitPoints} onChange={handleChange}/><br/>
                {errors.hitPoints ?  <span className={style.error}>{errors.hitPoints}</span> : null}
            </div>
        </div>

        <div className={style.row}>
            <div className={style.col1}>
                <label for="attack">Attack</label>
            </div>
            <div className={style.col2}>
                <input type="number" key="attack" name="attack" placeholder="0-100" value={pokeData.attack} onChange={handleChange} /><br/>
                {errors.attack ?  <span className={style.error}>{errors.attack}</span> : null}
            </div>
        </div>

        <div className={style.row}>
            <div className={style.col1}>
                <label for="defense">Defense</label>
            </div>
            <div className={style.col2}>
                <input type="number" key="defense" name="defense" placeholder="0-100" value={pokeData.defense} onChange={handleChange} /><br/>
                {errors.defense ?  <span className={style.error}>{errors.defense}</span> : null}
            </div>
        </div>

        <div className={style.row}>
            <div className={style.col1}>
                <label for="speed">Speed</label>
            </div>
            <div className={style.col2}>
                <input type="number" key="speed" name="speed" placeholder="0-100" value={pokeData.speed} onChange={handleChange} /><br/>
                {errors.speed ?  <span className={style.error}>{errors.speed}</span> : null}
            </div>
        </div>

        <div className={style.row}>
            <div className={style.col1}>
                <label for="height">Height</label>
            </div>
            <div className={style.col2}>
                <input type="number" key="height" name="height" placeholder="0-100" value={pokeData.height} onChange={handleChange} /><br/>
                {errors.height ?  <span className={style.error}>{errors.height}</span> : null}
            </div>
        </div>

        <div className={style.row}>
            <div className={style.col1}>
                <label for="weight">Weight</label>
            </div>
            <div className={style.col2}>
                <input type="number" key="weight" name="weight" placeholder="0-100" value={pokeData.weight} onChange={handleChange} /><br/>
                {errors.weight ?  <span className={style.error}>{errors.weight}</span> : null}
            </div>
        </div>

        <div className={style.row}>
            <div className={style.col1}>
                <label for="type1">Type</label>
            </div>
            <div className={style.col2}>
                <select id="type1" name="type1" value={pokeData.type1} onChange={handleChange}>
                    <option value="">Select a type</option>
                    <option value="normal">normal</option>
                    <option value="fighting">fighting</option>
                    <option value="flying">flying</option>
                    <option value="poison">poison</option>
                    <option value="ground">ground</option>
                    <option value="rock">rock</option>
                    <option value="bug">bug</option>
                    <option value="ghost">ghost</option>
                    <option value="steel">steel</option>
                    <option value="fire">fire</option>
                    <option value="water">water</option>
                    <option value="grass">grass</option>
                    <option value="electric">electric</option>
                    <option value="psychic">psychic</option>
                    <option value="ice">ice</option>
                    <option value="dragon">dragon</option>
                    <option value="dark">dark</option>
                    <option value="fairy">fairy</option>
                    <option value="shadow">shadow</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
        </div>

        <div className={style.row}>
            <div className={style.col1}>
                <label for="type2">Type</label>
            </div>
            <div className={style.col2}>
                <select id="type2" name="type2" value={pokeData.type2} onChange={handleChange}>
                    <option value="">Select a type</option>
                    <option value="normal">normal</option>
                    <option value="fighting">fighting</option>
                    <option value="flying">flying</option>
                    <option value="poison">poison</option>
                    <option value="ground">ground</option>
                    <option value="rock">rock</option>
                    <option value="bug">bug</option>
                    <option value="ghost">ghost</option>
                    <option value="steel">steel</option>
                    <option value="fire">fire</option>
                    <option value="water">water</option>
                    <option value="grass">grass</option>
                    <option value="electric">electric</option>
                    <option value="psychic">psychic</option>
                    <option value="ice">ice</option>
                    <option value="dragon">dragon</option>
                    <option value="dark">dark</option>
                    <option value="fairy">fairy</option>
                    <option value="shadow">shadow</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
        </div>

        <div className={style.row}>
            <div className={style.col1}></div>
                <label htmlFor="image">Image</label>
                <input type="text" id="image" name="image" value={pokeData.image} onChange={handleInputChange} placeholder="Paste here your image URL"/><br/>
                    {errors.image ?  <span className={style.error}>{errors.image}</span> : null}
        </div>
       
           { image ? (
            <div className={style.newPokeContainer}>
                <div >
                    <img src={image} alt={"newPokemon"} className={style.newPoke}/>
                </div>
            </div>
           ) : (null)
           }
        
            <div className={style.row}>
                <button type="submit" name="createButton" className={style.button}>Create</button>
            </div>
    </form>

        <div>
            <button name="randomButton" className={style.randomButton} onClick={handleRandom}>Surprise me!</button>
        </div>
    </div>

    <div className={style.container2}>
        {newPokemons?.map((pokemon) => (
              <PokedexCard key={pokemon.index} pokemon={pokemon} />
            ))}
    </div>
</div>
)
};

export default Create;
