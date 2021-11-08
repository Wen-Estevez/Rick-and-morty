import { useParams } from "react-router";
import { useState,useEffect } from "react";
import './Extendida.css';
import fondoExt from "../Images/fondoExt.jpg";

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
   useEffect(() => {fetchPersonaje()}, [id]);
    return(
        <div>
            <img className="fondoExt" src={`${fondoExt}`} />
        <div className="Extendida">
            <img className="fotopersonaje" src={`${personaje.image}`}/><br/>
            <div className="infopj">
                <span>Nombre: {`${personaje.name}`}</span><br/>
                <span>Estado: {`${personaje.status}`}</span><br/>
                <span>Especie: {`${personaje.species}`}</span><br/>
                <span>Genero: {`${personaje.gender}`}</span><br/>
                <span>Ubicación: {`${personaje.location.name}`}</span>
            </div>
        </div>
        </div>
    )
}