import Home from "./Vistas/Home" 
import Extendida from "./Vistas/Extendida" 
import { Route,Routes} from 'react-router-dom';

function App() {
  return (
   <div>
     <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/:id" element={<Extendida/>}/>
     </Routes>
   </div>
  );
}

export default App;
