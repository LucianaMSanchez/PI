import React from "react";
import { useDispatch, useSelector} from 'react-redux';
import { useLocation, Link} from "react-router-dom";
import { closeCard } from "../../redux/actions";
import style from "./Card.module.css";
import ellipse1 from "../../assets/Ellipse 1.png";
import { switchIcon } from "../../utils/switchs";



function Card({id, name, image, types}) {
   
const location = useLocation();
const pokemons = useSelector((state) => state.pokemons);
const dispatch = useDispatch();

   const onClose = () => {
      dispatch(closeCard(id, pokemons))
   };

   return (
    
      <div className={style.container}>
         <div className={style.miniContainer}>
            <div className={style.supContainer}>
               <div>
                  {location.pathname === "/home" ? (
                     <button onClick={onClose} className={style.closebutton}>x</button>
                     ) : ( null
                     )}
               </div>

               <div>
                  <h2 className={style.name}>{name} </h2>
               </div>

               <div className={style.types}>
                        {types?.map((type, index) => (
                           <div key={index} className={style.type}>
                              <Link to={`/typeDetail/${type}`} > 
                                 <img src={switchIcon(type)} alt="type" className={style.typeImage}/>
                              </Link>
                           </div>
                        ))}
                        </div>
            </div>
            
            <div className={style.infContainer}>
               <div className={style.imageContainer}>
                     <Link to={`/detail/${id}`}>
                        <img className={style.image} src={image} alt='imagen' />
                        <img src={ellipse1} alt="ellipse" className={style.ellipse}/>
                     </Link>
               </div>
            </div> 
         </div>
      </div>
   );
}


export default Card;




