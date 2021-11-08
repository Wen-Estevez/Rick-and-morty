import { useParams } from "react-router";
import { useState,useEffect } from "react";
import './Extendida.css';
import fondoExt from "../Images/fondoExt.jpg";
import { Link } from "react-router-dom";

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

   if(personaje.name){
    return(
        <div>
            <img className="fondoExt" src={`${fondoExt}`} alt="Fondo Extendida"/>
            <div className="Extendida">
                <img className="fotopersonaje" src={`${personaje.image}`} alt="Imagen personaje"/>
                <div className="infopj" >
                    <span>Nombre: {`${personaje.name}`}</span><br/>
                    <span>Estado: {`${personaje.status}`}</span><br/>
                    <span>Especie: {`${personaje.species}`}</span><br/>
                    <span>Genero: {`${personaje.gender}`}</span><br/>
                    <span>Ubicación: {`${personaje.location.name}`}</span>
                </div>
                <Link to={`/`}>
                    <button>X</button>
                </Link>
                <Link to={`/episode/${personaje.id}`}>
                    <button >Ver Episodios</button>
                </Link>
            </div>
        </div>
    )}
   else{return <></>}
    
}
