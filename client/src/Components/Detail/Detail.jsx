import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { createPokemon, addTypeToPok, clearPokemons, clearTypes, addPokedex, removePokedex } from "../../redux/actions";

const Detail = () => {
   
   const {id} = useParams();
   const dispatch = useDispatch()
   const created = useSelector((state) => state.created)
   const types = useSelector((state) => state.types)
   const error = useSelector((state) => state.error);
   const userId = useSelector((state) => state.user);
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      if (id) {
        dispatch(createPokemon(id));
        dispatch(addTypeToPok(id));
      }
      return () => {
         dispatch(clearPokemons());
         dispatch(clearTypes());
     }
    }, [id, dispatch]);
   
   const handlePokedex = () => {
      if (isFav){
         setIsFav(false)
         dispatch(removePokedex(id, userId));
         if(error) window.alert(error)
      } else {
         setIsFav(true)
         dispatch(addPokedex(id, userId));
         if(error) window.alert(error)
      }
      };
   

 return (
   <div >
    <div className={style.container}>
      { created.name ? (
         <>
         <div className={style.divUno}>
            <div>
               <button onClick={handlePokedex} className={style.fav}> {isFav ? "ADDED TO POKEDEX✅" : "ADD TO POKEDEX⬜" }</button>
            </div>
            <div>
               <h2 className={style.name}>{created.name} </h2>
            </div>
            <div className={style.divDos}>
               <img className={style.image} src={created.image} alt={created.name} />
            </div>
            <div className={style.caracteristics}>
               <h3>HitPoints: {created.hitPoints} </h3>
               <h3>Attack: {created.attack} </h3>
               <h3>Defense: {created.defense} </h3>
               <h3>Speed: {created.speed}</h3>
               <h4>weight: {created.weight}</h4>
               <h4>height: {created.height}</h4>
            </div>
         </div>

         </>
      ) : (
         <h3>Loading...</h3>
      )}
    </div>

         <div className={style.container2}>
                    {types?.map((type) => (
                        <div key={type} className={style.type}>
                           <Link to={`/typeDetail/${type}`} > 
                              <img
                              src={`../../assets/types/${type}.png`} 
                              alt={type}
                              className={style.typeImage}
                              />
                           </Link>
                           <span>{type}</span>
                        </div>
                     ))}
         </div>

         <div>
            <Link to="/home">
                <h2 className={style.goBack}>GO BACK!</h2>
            </Link>
         </div>

    </div>
 );
};

 export default Detail;

