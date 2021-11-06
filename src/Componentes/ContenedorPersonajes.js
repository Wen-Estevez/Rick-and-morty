import { useEffect, useState } from "react";
import Personajes from "./Personajes";

export default function ContenedorPersonajes(){

    const [personajes,setPersonajes]=useState([]);
    const fetchPersonajes= () => fetch(`https://rickandmortyapi.com/api/character/?page=1`)
      .then(response => response.json())
      .then(pagina => {
          if (pagina.results !== undefined){
            setPersonajes(pagina.results)
                  }
          })
    useEffect(() => {fetchPersonajes()}, []);

    return(
        <div>
            {personajes.map((personaje)=><Tarjetas
                name={personaje.name}
                img={personaje.image}
            />
            )}
        </div>
    )

}
