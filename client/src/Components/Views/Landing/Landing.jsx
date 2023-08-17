import React, { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { loginPending } from "../../../redux/actions";
import { Form, FollowMouse } from "../../index";
import style from "./Landing.module.css";
import pokeball from "../../../assets/pokeball.png";
import light from "../../../assets/luz2.png";


const Landing = () => {
  
  const error = useSelector((state) => state.error);
  const access = useSelector((state) => state.access);
  const [showLight, setShowLight] = useState(false);
  const dispatch = useDispatch();

  const handlePokeball = () => {
    setShowLight(true);
    setTimeout(() => {
    setShowLight(false);
    dispatch(loginPending())
  }, 300);  
};


  return (
    <div className={style.contenedor2}>
      <div>
        <FollowMouse />
      </div>
      {access === false ? (
        <div>
          <img 
            id="destello"
            className={`${style.light} ${showLight? "" : style.invisible}`} 
            src= {light} 
            alt="blue light" 
            />
          <img 
            id="pokeball"
            className={style.ball} 
            src={pokeball} 
            alt="pokeball" 
            onClick={handlePokeball} 
            />
        </div>
      ) : (
        <div className={style.divForm}>
          {error && <p className={style.error}>{error}</p>}
          <Form />
        </div>
      )}
    </div>
  );
}

export default Landing;