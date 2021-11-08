import { useParams } from "react-router";
import { useState,useEffect } from "react";

export default function Extendida (){
    let id=useParams().id;
   const [personaje,setPersonaje]=useState([]);
   const fetchPersonaje= () => fetch(`https://rickandmortyapi.com/api/character/${id}`)
     .then(response => response.json())
     .then(pj => {
         if (pj !== undefined){
           setPersonaje(pj)
                 }
         })
   useEffect(() => {fetchPersonaje()}, []);
    return(
        <div className="Extendida">
            <img src={`${personaje.image}`}/><br/>
            <span>Nombre: {`${personaje.name}`}</span><br/>
            <span>Estado: {`${personaje.status}`}</span><br/>
            <span>Especie: {`${personaje.species}`}</span><br/>
            <span>Genero: {`${personaje.gender}`}</span><br/>
            <span>Ubicación: {`${personaje.location.name}`}</span>
        </div>
    )
}