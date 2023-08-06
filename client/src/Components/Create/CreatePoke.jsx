import style from "./CreatePoke.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import validation from "../../utils/validationsNewPoke";
import {createOwnPokemon, getPokemonId} from "../../redux/actions";



const Create = () => { 

    const newPokemons = useSelector((state) => state.newPokemons);
    const pokemons = useSelector((state) => state.pokemons);
    const dispatch = useDispatch();
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
        types: [],
    });
    const [errors, setErrors]= useState({});
    const [image, setImage] = useState(null);

    const handleChange = (event) => {
        setPokeData({...pokeData, [event.target.name]: event.target.value});
        setErrors(validation({...pokeData, [event.target.name]: event.target.value}));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(createOwnPokemon(pokeData));
    };

    const handleRandom = () => {
        const idRandom = (Math.floor(Math.random() * 1281) + 1)
        dispatch(getPokemonId(idRandom))
        const randomImage = pokemons.map((poke)=>poke.image)
        setImage(randomImage);
    };
     
    const handleInputChange = (event) => {
        const imageUrl = event.target.value;
        setImage(imageUrl);
    }


return (
<div className={style.back}>
    <div className={style.container}>
    <form onSubmit={submitHandler}>
        <div className={style.row}>
            <div className={style.col1}>
                <label for="id">Number</label>
            </div>
            <div className={style.col2}>
                <input 
                type="number" 
                key="id" 
                name="id" 
                placeholder="Choose a number"
                value={pokeData.id} 
                onChange={handleChange} 
                /><br/>
                {errors.id ?  <span className={style.error}>{errors.id}</span> : null}
            </div>
        </div>
        <div className={style.row}>
            <div className={style.col1}>
                <label for="name">Name</label>
            </div>
            <div className={style.col2}>
                <input 
                type="text" 
                key="name" 
                name="name" 
                placeholder="Choose a name for your pokémon"
                value={pokeData.name} 
                onChange={handleChange} 
                /><br/>
                {errors.name ?  <span className={style.error}>{errors.name}</span> : null}
            </div>
        </div>
        <div className={style.row}>
            <div className={style.col1}>
                <label for="hitPoints">HitPoints</label>
            </div>
            <div className={style.col2}>
                <input 
                type="number" 
                key="hitPoints" 
                name="hitPoints" 
                placeholder="0-100"
                value={pokeData.hitPoints} 
                onChange={handleChange} 
                /><br/>
                {errors.hitPoints ?  <span className={style.error}>{errors.hitPoints}</span> : null}
            </div>
        </div>
        <div className={style.row}>
            <div className={style.col1}>
                <label for="attack">Attack</label>
            </div>
            <div className={style.col2}>
                <input 
                type="number" 
                key="attack" 
                name="attack" 
                placeholder="0-100"
                value={pokeData.attack} 
                onChange={handleChange} 
                /><br/>
                {errors.attack ?  <span className={style.error}>{errors.attack}</span> : null}
            </div>
        </div>
        <div className={style.row}>
            <div className={style.col1}>
                <label for="defense">Defense</label>
            </div>
            <div className={style.col2}>
                <input 
                type="number" 
                key="defense" 
                name="defense" 
                placeholder="0-100"
                value={pokeData.defense} 
                onChange={handleChange} 
                /><br/>
                {errors.defense ?  <span className={style.error}>{errors.defense}</span> : null}
            </div>
        </div>
        <div className={style.row}>
            <div className={style.col1}>
                <label for="speed">Speed</label>
            </div>
            <div className={style.col2}>
                <input 
                type="number" 
                key="speed" 
                name="speed" 
                placeholder="0-100"
                value={pokeData.speed} 
                onChange={handleChange} 
                /><br/>
                {errors.speed ?  <span className={style.error}>{errors.speed}</span> : null}
            </div>
        </div>
        <div className={style.row}>
            <div className={style.col1}>
                <label for="height">Height</label>
            </div>
            <div className={style.col2}>
                <input 
                type="number" 
                key="height" 
                name="height" 
                placeholder="0-100"
                value={pokeData.height} 
                onChange={handleChange} 
                /><br/>
                {errors.height ?  <span className={style.error}>{errors.height}</span> : null}
            </div>
        </div>
        <div className={style.row}>
            <div className={style.col1}>
                <label for="weight">Weight</label>
            </div>
            <div className={style.col2}>
                <input 
                type="number" 
                key="weight" 
                name="weight" 
                placeholder="0-100"
                value={pokeData.weight} 
                onChange={handleChange} 
                /><br/>
                {errors.weight ?  <span className={style.error}>{errors.weight}</span> : null}
            </div>
        </div>
        <div className={style.row}>
            <div className={style.col1}>
                <label for="type1">Type</label>
            </div>
            <div className={style.col2}>
                <select id="type1" name="type1">
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
            <select id="type2" name="type2">
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
                    <input
                        type="text"
                        id="image"
                        name="image"
                        onChange={handleInputChange}
                        placeholder="Paste de your image Url here"
                    /><br/>
                    {errors.image ?  <span className={style.error}>{errors.image}</span> : null}
        </div>
        <div className={style.row}>
        <div className={style.col1}>
         
            <button className={style.randomButton} onClick={handleRandom}>Surprise me!</button>
        </div>
           { image ? (
        <div className={style.col2}>
            <img src={image} alt={"newPokemon"}/>
        </div>
           ) : (null)
           }
        </div>
        <div className={style.row}>
            <button type="submit" className={style.button}>Create</button>
        </div>
    </form>
    </div>

    <div className={style.container2}>
        <div>
            {newPokemons?.map(({ id, name, image, types}) => {
                return <Card 
                key={id}
                id={id} 
                name={name} 
                image={image} 
                types={types}
                />;
                })}
        </div>;
    </div>
</div>
)
};

export default Create;
