import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTypes } from "../../redux/actions";
import style from "./Types.module.css";
import { switchIcon } from "../../utils/switchs";


const Types = () => {
   
    const types = useSelector((state) => state.types); 
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getTypes());
        }, [dispatch]);


    return (
        <div className={style.back}>
            <div className={style.container}>
        {types?.map((type, index) => (
            <div key={index} className={style.type}>
                <Link to={`/typeDetail/${type.name}`} > 
                    <img src={switchIcon(type.name)} alt="type" className={style.typeImage}/>
                </Link>
                    <span className={style.typeName}>{type.name}</span>
            </div>
         ))}
         </div>
        </div>

    )
}

export default Types;
