import Nav from './Components/Nav/Nav.jsx';
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Detail from "./Components/Detail/Detail.jsx";
import Landing from './Components/Landing/Landing.jsx';
import Pokedex from './Components/Pokedex/Pokedex.jsx';
import Create from './Components/Create/CreatePoke.jsx';
import CreateDetail from './Components/CreateDetail/CreateDetail.jsx';
import TypeDetail from './Components/TypeDetail/TypeDetail.jsx';
import Play from './Components/Play/Play.jsx';
import { useLocation } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';



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
            <Route path="/createDetail/:id" element={<CreateDetail />} />
            <Route path="/typeDetail/:name" element={<TypeDetail />} />
            <Route path="/create" element={<Create />} />
            <Route path="/play" element={<Play />} />
         </Routes>
      </div>
   );
 
};

export default App;

