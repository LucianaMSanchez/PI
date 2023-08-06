import style from "./Filters.module.css"
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderAz, orderHp, orderAttack, orderDefense, orderSpeed } from "../../redux/actions";
import { filterOrigin, filterType, clearFilters, clearFiltersPokedex } from "../../redux/actions";
import shadow from "../../assets/types/shadow.png";
import bug from "../../assets/types/bug.png";
import dark from "../../assets/types/dark.png";
import dragon from "../../assets/types/dragon.png";
import fairy from "../../assets/types/fairy.png";
import fighting from "../../assets/types/fighting.png";
import fire from "../../assets/types/fire.png";
import flying from "../../assets/types/flying.png";
import ghost from "../../assets/types/ghost.png";
import grass from "../../assets/types/grass.png";
import ground from "../../assets/types/ground.png";
import ice from "../../assets/types/ice.png";
import electric from "../../assets/types/electric.png";
import steel from "../../assets/types/steel.png";
import normal from "../../assets/types/normal.png";
import poison from "../../assets/types/poison.png";
import psychic from "../../assets/types/psychic.png";
import rock from "../../assets/types/rock.png";
import unknown from "../../assets/types/unknown.png";
import water from "../../assets/types/water.png";



const Filters = (pokemons, allPokemons) =>{

    const location = useLocation();
    const dispatch = useDispatch();
    const error = useSelector((state) => state.error)
    const [aux, setAux] = useState({ 
        orderAz: "null", 
        orderHp: "null", 
        orderAttack: "null", 
        orderDefense: "null", 
        orderSpeed: "null", 
        filterOrigin: "null", 
        filterType: "null"
    })


    const handleOrderAz = (value) => {
        if (value !== "null"){
            dispatch(orderAz(value, pokemons))
            setAux(({...aux, 
                orderAz: value, 
                orderHp: "null", 
                orderAttack: "null", 
                orderDefense: "null", 
                orderSpeed: "null", 
                filterOrigin: "null", 
                filterType: "null"
            }))
            if(error) window.alert(error)
        }
    }

    const handleOrderHp = (value) => {
        if (value !== "null"){
            dispatch(orderHp(value, pokemons))
            setAux(({...aux, 
                orderHp: value, 
                orderAz: "null", 
                orderAttack: "null", 
                orderDefense: "null", 
                orderSpeed: "null", 
                filterOrigin: "null", 
                filterType: "null"
            }))
            if(error) window.alert(error)
        }
    }
    const handleOrderAttack = (value) => {
        if (value !== "null"){
            dispatch(orderAttack(value, pokemons))
            setAux(({...aux, 
                orderAttack: value, 
                orderHp: "null", 
                orderAz: "null", 
                orderDefense: "null", 
                orderSpeed: "null", 
                filterOrigin: "null", 
                filterType: "null"
            }))
            if(error) window.alert(error)
        }
    }
    const handleOrderDefense = (value) => {
        if (value !== "null"){
            dispatch(orderDefense(value, pokemons))
            setAux(({...aux, 
                orderDefense: value, 
                orderHp: "null", 
                orderAttack: "null", 
                orderAz: "null", 
                orderSpeed: "null", 
                filterOrigin: "null", 
                filterType: "null"
            }))
            if(error) window.alert(error)
        }
    }
    const handleOrderSpeed = (value) => {
        if (value !== "null"){
            dispatch(orderSpeed(value, pokemons))
            setAux(({...aux, 
                orderSpeed: value, 
                orderHp: "null", 
                orderAttack: "null", 
                orderDefense: "null", 
                orderAz: "null", 
                filterOrigin: "null", 
                filterType: "null"
            }))
            if(error) window.alert(error)
        }
    }
    
    const handleFilterOrigin = (value) => {
        if (value !== "null"){
            dispatch(filterOrigin(value, allPokemons))
            setAux(({...aux, 
                filterOrigin: value, 
                orderAz: "null", 
                orderHp: "null", 
                orderAttack: "null", 
                orderDefense: "null", 
                orderSpeed: "null",  
                filterType: "null" 
            }))
            if(error) window.alert(error)  
        }
    }
    const handleFilterType = (value) => {
        if (value !== "null"){
            dispatch(filterType(value, allPokemons))
            setAux(({...aux, 
                filterType: value, 
                orderAz: "null", 
                orderHp: "null", 
                orderAttack: "null", 
                orderDefense: "null", 
                orderSpeed: "null",  
                filterOrigin: "null" 
            }))
            if(error) window.alert(error)  
        }
    }

    const handleClear = () => {
        setAux({ 
            orderAz: "null", 
            orderHp: "null", 
            orderAttack: "null", 
            orderDefense: "null", 
            orderSpeed: "null", 
            filterOrigin: "null", 
            filterType: "null"        
        })
        dispatch(clearFilters())
    }

    const handleClearPokedex = () => {
        setAux({ 
            orderAz: "null", 
            orderHp: "null", 
            orderAttack: "null", 
            orderDefense: "null", 
            orderSpeed: "null", 
            filterOrigin: "null", 
            filterType: "null"        
        })
        dispatch(clearFiltersPokedex())
    }
   
        

return (

    <div className={style.container}>
        <div className={style.filters}>
        <h2 className={style.titles}>Order</h2>
            <div>
                <button className={style.ord} onClick={() => handleOrderAz("A")}>Az</button>
                <button className={style.ord} onClick={() => handleOrderAz("D")}>Za</button>
            </div>
        <h2 className={style.titles}>Filter</h2>
            <div>
                <button className={style.ord} onClick={() => handleFilterOrigin("Created")}>Created</button>
                <button className={style.ord} onClick={() => handleFilterOrigin("Original")}>Original</button>
            </div>
        </div>
        <div className={style.orders}>
            <h2 className={style.titles}>Stats</h2>
            <div>
                <button className={style.stat} onClick={() => handleOrderHp("A")}>+ Hp</button>
                <button className={style.stat} onClick={() => handleOrderHp("D")}>- Hp</button>
            </div>
            <div>
                <button className={style.stat} onClick={() => handleOrderAttack("A")}>+ Attack</button>
                <button className={style.stat} onClick={() => handleOrderAttack("D")}>- Attack</button>
            </div>
            <div>
                <button className={style.stat} onClick={() => handleOrderDefense("A")}>+ Defense</button>
                <button className={style.stat} onClick={() => handleOrderDefense("D")}>- Defense</button>
            </div>
            <div>
                <button className={style.stat} onClick={() => handleOrderSpeed("A")}>+ Speed</button>
                <button className={style.stat} onClick={() => handleOrderSpeed("D")}>- Speed</button>
            </div>
        </div>    
        <div >
        <h2 className={style.titles}>Filter type of energy</h2>
            <div className={style.types}>
                <button onClick={() => handleFilterType("normal")} className={style.buttons}> <img src={normal} alt="normal" className={style.type} /> </button>
                <button onClick={() => handleFilterType("fighting")} className={style.buttons}> <img src={fighting} alt="fighting" className={style.type} /> </button>
                <button onClick={() => handleFilterType("flying")} className={style.buttons}> <img src={flying} alt="flying" className={style.type} /> </button>
                <button onClick={() => handleFilterType("poison")} className={style.buttons}> <img src={poison} alt="poison" className={style.type} /> </button>
                <button onClick={() => handleFilterType("ground")} className={style.buttons}> <img src={ground} alt="ground" className={style.type} /> </button>
                <button onClick={() => handleFilterType("rock")} className={style.buttons}> <img src={rock} alt="rock" className={style.type} /> </button>
                <button onClick={() => handleFilterType("bug")} className={style.buttons}> <img src={bug} alt="bug" className={style.type} /> </button>
                <button onClick={() => handleFilterType("ghost")} className={style.buttons}> <img src={ghost} alt="ghost" className={style.type} /> </button>
                <button onClick={() => handleFilterType("steel")} className={style.buttons}> <img src={steel} alt="steel" className={style.type} /> </button>
                <button onClick={() => handleFilterType("fire")} className={style.buttons}> <img src={fire} alt="fire" className={style.type} /> </button>
                <button onClick={() => handleFilterType("water")} className={style.buttons}> <img src={water} alt="water" className={style.type} /> </button>
                <button onClick={() => handleFilterType("grass")} className={style.buttons}> <img src={grass} alt="grass" className={style.type} /> </button>
                <button onClick={() => handleFilterType("electric")} className={style.buttons}> <img src={electric} alt="electric" className={style.type} /> </button>
                <button onClick={() => handleFilterType("psychic")} className={style.buttons}> <img src={psychic} alt="psychic" className={style.type} /> </button>
                <button onClick={() => handleFilterType("ice")} className={style.buttons}> <img src={ice} alt="ice" className={style.type} /> </button>
                <button onClick={() => handleFilterType("dragon")} className={style.buttons}> <img src={dragon} alt="dragon" className={style.type} /> </button>
                <button onClick={() => handleFilterType("dark")} className={style.buttons}> <img src={dark} alt="dark" className={style.type} /> </button>
                <button onClick={() => handleFilterType("fairy")} className={style.buttons}> <img src={fairy} alt="fairy" className={style.type} /> </button>
                <button onClick={() => handleFilterType("shadow")} className={style.buttons}> <img src={shadow} alt="shadow" className={style.type} /> </button>
                <button onClick={() => handleFilterType("unknown")} className={style.buttons}> <img src={unknown} alt="unknown" className={style.type} /> </button>
            </div>
        </div>
    <button className={style.clearButton} onClick={location.pathname === "/home" ? handleClear : handleClearPokedex}>
      CLEAR FILTERS
    </button>
  </div>
    
 );
};

export default Filters;