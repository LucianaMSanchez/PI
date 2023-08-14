import React from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import { Home, About, Detail, Landing, Pokedex, Create, TypeDetail, Play } from "./Components/Views";
import { Nav } from "./Components";



function App() {
 
const location = useLocation();

 return (
      <div>
         {location.pathname !== '/' && <Nav />}
         <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/typeDetail/:name" element={<TypeDetail />} />
            <Route path="/create" element={<Create />} />
            <Route path="/play" element={<Play />} />
         </Routes>
      </div>
   );
 
};

export default App;

