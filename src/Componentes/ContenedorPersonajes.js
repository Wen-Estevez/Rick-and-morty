import { useEffect, useState } from "react";
import TarjetasPersonajes from "./TarjetasPersonajes";
import './ContenedorPersonajes.css';

export default function ContenedorPersonajes(pag){

    const [personajes,setPersonajes]=useState([]);
    const fetchPersonajes= () => fetch(`https://rickandmortyapi.com/api/character/?page=${pag}`)
      .then(response => response.json())
      .then(pagina => {
          if (pagina.results !== undefined){
            setPersonajes(pagina.results)
                  }
          })
    useEffect(() => {fetchPersonajes()}, []);

    return(
        <div className="contenedor">
            {personajes.map((personaje)=><TarjetasPersonajes
                key={personaje.id}
                name={personaje.name}
                img={personaje.image}
                status={personaje.status}
                species={personaje.species}
            />
            )}
        </div>
    )

}
