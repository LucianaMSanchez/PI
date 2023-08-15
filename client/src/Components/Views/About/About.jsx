import React from "react";
import style from "./About.module.css";
import pokemon from "../../../assets/pika.jpg"


const About = () => {

    return (
        <div className={style.contenedor1}>
            
            <div className={style.div}>
                <h1 className={style.h1}> Hey! </h1>
                <h2 className={style.h2}>This is the ultimate Pokémon Cards Application!</h2><br />
                <p className={style.p}>In our Home page you can search and find every single pokémon you want. You 
                can filter and order them according to many characteristics, including its types of energy.
                You can open the details of each pokémon or type by clicking on the corresponding card or 
                type icon, and once you're in you can choose to add any pokemon to your Pokédex.
                You can also check what pokémons are related to each type of energy and vice versa.
                Weather you're and expert trainer or you're a newy, you will love this app.</p>
                <h2 className={style.h2}>We invite you to explore it!!!</h2><br />
                <p className={style.p}>To PLAY the card GAME: you should go to your Pokédex and choose 4 CHAMPS to compete.
                Then go to the PLAY page and display 4 random cards. Whenever you're READY click the PLAY button and COMPETE!
                You can choose differents CHAMPS every time you play. GOOD LUCK!!</p>
            </div>            
            <div>
                <img className={style.image} src={pokemon} alt="pokemon"/>
            </div>
            <div className={style.div}>
                <h1 className={style.h1}> Hola! </h1>
                <h2 className={style.h2}>Esta es la mejor Aplicación de Cartas de Pokémon!</h2><br />
                <p className={style.p}>En nuestra página Home puedes buscar y encontrar cada uno de los pokémons que gustes.
                Puedes filtrarlos y ordenarlos acorde a diversas características, incluyendo sus tipos de energía.
                Puedes abrir para ver los detalles de cada pokémon o tipo de energía haciendo click en la
                carta o el tipo de ícono correspondiente, y una vez dentro, puedes elegir agregar cualquier pokémon a tu Pokédex.
                También puedes ver que pokémons estan relacionados con cada tipo de energía y viceversa.
                Ya seas un entrenador experto o un novato, te va a encantar esta App.</p>
                <h2 className={style.h2}>Te invitamos a que la explores!!!</h2><br />
                <p className={style.p}>Para JUGAR el JUEGO de cartas: debes dirigirte a tu Pokédex y elegir 4 CHAMPS para competir.
                Luego dirígete a la pagina PLAY y despliega 4 cartas random. Cuando estés listo clickea en el botón PLAY y COMPITE!
                Puedes elegir diferentes CHAMPS cada vez que juegas. BUENA SUERTE!!</p>
            </div>

        </div>
    );
};

export default About;