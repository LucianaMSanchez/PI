import style from "./Filters.module.css"
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderAz, orderHp, orderAttack, orderDefense, orderSpeed } from "../../redux/actions";
import { filterOrigin, filterType, clearFilters, clearFiltersPokedex, clearError } from "../../redux/actions";
import images from "../../utils/images";


const Filters = ({pokemons, allPokemons}) =>{

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


    const handleOrderAz = (order) => {
        if (order !== "null"){
            dispatch(orderAz(order, pokemons))
        setAux(({...aux, 
            orderAz: order, 
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

    const handleOrderHp = (order) => {
        if (order !== "null"){
            dispatch(orderHp(order, pokemons))
            setAux(({...aux, 
                orderHp: order, 
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
    const handleOrderAttack = (order) => {
        if (order !== "null"){
            dispatch(orderAttack(order, pokemons))
            setAux(({...aux, 
                orderAttack: order, 
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
    const handleOrderDefense = (order) => {
        if (order !== "null"){
            dispatch(orderDefense(order, pokemons))
            setAux(({...aux, 
                orderDefense: order, 
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
    const handleOrderSpeed = (order) => {
        if (order !== "null"){
            dispatch(orderSpeed(order, pokemons))
            setAux(({...aux, 
                orderSpeed: order, 
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
    
    const handleFilterOrigin = (origin) => {
        if (origin !== "null"){
            dispatch(filterOrigin(origin, allPokemons))
            setAux(({...aux, 
                filterOrigin: origin, 
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
    const handleFilterType = (type) => {
        if (type !== "null"){
            dispatch(filterType(type, allPokemons))
            setAux(({...aux, 
                filterType: type, 
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
   
    useEffect(() => {
    setTimeout(() => {
        dispatch(clearError());
      }, 2000);
      }, [aux]);
    
  

return (

    <div className={location.pathname === "/home" ? style.container : style.container2}>
        <div className={style.filters}>
        <h2 className={style.titles}>Order</h2>
            <div>
                <button value={aux.orderAz} className={style.ord} onClick={() => handleOrderAz("A")}>Az</button>
                <button value={aux.orderAz} className={style.ord} onClick={() => handleOrderAz("D")}>Za</button>
            </div>
        <h2 className={style.titles}>Filter</h2>
            <div>
                <button value={aux.filterOrigin} className={style.ord} onClick={() => handleFilterOrigin("Created")}>Created</button>
                <button value={aux.filterOrigin} className={style.ord} onClick={() => handleFilterOrigin("Original")}>Original</button>
            </div>
        </div>
        <div className={style.orders}>
            <h2 className={style.titles}>Stats</h2>
            <div>
                <button value={aux.orderHp} className={style.stat} onClick={() => handleOrderHp("D")}>+ Hp</button>
                <button value={aux.orderHp} className={style.stat} onClick={() => handleOrderHp("A")}>- Hp</button>
            </div>
            <div>
                <button value={aux.orderAttack} className={style.stat} onClick={() => handleOrderAttack("D")}>+ Attack</button>
                <button value={aux.orderAttack} className={style.stat} onClick={() => handleOrderAttack("A")}>- Attack</button>
            </div>
            <div>
                <button value={aux.orderDefense} className={style.stat} onClick={() => handleOrderDefense("D")}>+ Defense</button>
                <button value={aux.orderDefense} className={style.stat} onClick={() => handleOrderDefense("A")}>- Defense</button>
            </div>
            <div>
                <button value={aux.orderSpeed} className={style.stat} onClick={() => handleOrderSpeed("D")}>+ Speed</button>
                <button value={aux.orderSpeed} className={style.stat} onClick={() => handleOrderSpeed("A")}>- Speed</button>
            </div>
        </div>    
        <div >
        <h2 className={style.titles}>Filter type of energy</h2>
            <div className={style.types}>
                <button value={aux.filterType} onClick={() => handleFilterType("normal")} className={style.buttons}> <img src={images.normal} alt="normal" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("fighting")} className={style.buttons}> <img src={images.fighting} alt="fighting" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("flying")} className={style.buttons}> <img src={images.flying} alt="flying" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("poison")} className={style.buttons}> <img src={images.poison} alt="poison" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("ground")} className={style.buttons}> <img src={images.ground} alt="ground" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("rock")} className={style.buttons}> <img src={images.rock} alt="rock" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("bug")} className={style.buttons}> <img src={images.bug} alt="bug" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("ghost")} className={style.buttons}> <img src={images.ghost} alt="ghost" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("steel")} className={style.buttons}> <img src={images.steel} alt="steel" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("fire")} className={style.buttons}> <img src={images.fire} alt="fire" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("water")} className={style.buttons}> <img src={images.water} alt="water" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("grass")} className={style.buttons}> <img src={images.grass} alt="grass" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("electric")} className={style.buttons}> <img src={images.electric} alt="electric" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("psychic")} className={style.buttons}> <img src={images.psychic} alt="psychic" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("ice")} className={style.buttons}> <img src={images.ice} alt="ice" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("dragon")} className={style.buttons}> <img src={images.dragon} alt="dragon" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("dark")} className={style.buttons}> <img src={images.dark} alt="dark" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("fairy")} className={style.buttons}> <img src={images.fairy} alt="fairy" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("shadow")} className={style.buttons}> <img src={images.shadow} alt="shadow" className={style.type} /> </button>
                <button value={aux.filterType} onClick={() => handleFilterType("unknown")} className={style.buttons}> <img src={images.unknown} alt="unknown" className={style.type} /> </button>
            </div>
        </div>
        {error? <p className={style.error}>{error}</p> : null}
        <button className={style.clearButton} onClick={location.pathname === "/home" ? handleClear : handleClearPokedex}>
            CLEAR FILTERS
        </button>


  </div>
    
 );
};

export default Filters;