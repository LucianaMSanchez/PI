import React from "react";
import style from "./Home.module.css"
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import Types from "../Types/Types";


const Home = () =>{


return (


    <div className={style.contain}>
        <div>
            <Filters /> 
        </div>
        <div>
            <Cards /> 
        </div>
        <div>
            <Types />
        </div>
    </div>
    
    );
};

export default Home;