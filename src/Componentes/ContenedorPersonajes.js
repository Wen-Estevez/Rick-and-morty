import { useEffect, useState } from "react";
import TarjetasPersonajes from "./TarjetasPersonajes";
import './ContenedorPersonajes.css';

//Contenedor de cartas de personajes, trae la informacion de las paginas

export default function ContenedorPersonajes({pag}){            //Recibe el estado pagina
    const [personajes,setPersonajes]=useState([]);              //Crea el estado personajes
    const fetchPersonajes= (pag) => fetch(`https://rickandmortyapi.com/api/character/?page=${pag}`) //Promesa, trae informacion de la api
      .then(response => response.json())                        //Si hay respuesta la convierte en json 
      .then(pagina => {                                         //Guarda ese json en una variable, pagina
          if (pagina.results !== undefined){
            setPersonajes(pagina.results)                       //Guarda la informacion recibida en el estado personajes
                  }
          })
    useEffect(() => {fetchPersonajes(pag)}, [pag]);             //Cuando pagina se modifique, realiza la promesa

    return(
        <div className="contenedor">
            {personajes.map((personaje)=><TarjetasPersonajes
                key={personaje.id}
                id={personaje.id}
                name={personaje.name}
                img={personaje.image}
                status={personaje.status}
                species={personaje.species}
            />
            )}
        </div>
    )

}
