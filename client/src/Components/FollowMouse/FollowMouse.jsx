import React, { useState, useEffect } from "react";
import mouse from "../../assets/pikachu.png";
import style from "./FollowMouse.module.css";


const FollowMouse = () => {
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

  export default FollowMouse;
