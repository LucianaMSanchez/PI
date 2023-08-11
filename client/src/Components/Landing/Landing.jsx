import style from "./Landing.module.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import Form from "../Form/Form";
import mouse from "../../assets/pikachu.png";
import pokeball from "../../assets/pokeball.png";
import light from "../../assets/luz2.png";
import { loginPending } from "../../redux/actions";

const ImageFollowMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div>
      <img className={style.mouse} src={mouse} alt="mouse" style={{ left: position.x, top: position.y }} />
    </div>
  );
};

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
  }, 500);  
};


  return (
    <div className={style.contenedor2}>
      <div>
        <ImageFollowMouse />
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