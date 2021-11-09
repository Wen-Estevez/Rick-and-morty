import Home from "./Vistas/Home" 
import Extendida from "./Vistas/Extendida" 
import { Route,Routes} from 'react-router-dom';
import Episodios from "./Vistas/Episodios";
import {useFirebaseApp} from "reactfire";

//Se conectan las url con las rutas

function App() {
  const firebase=useFirebaseApp();
  console.log(firebase);
  return (
   <div>
     <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/:id" element={<Extendida/>}/>
        <Route exact path="/episode/:id" element={<Episodios/>}/>
     </Routes>
   </div>
  );
}

export default App;
