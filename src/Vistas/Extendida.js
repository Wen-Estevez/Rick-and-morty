import { useParams } from "react-router";
import { useState,useEffect } from "react";
import './Extendida.css';
import fondoExt from "../Images/fondoExt.jpg";
import fondoExtpc from "../Images/fondoExtpc.jpg";
import { Link } from "react-router-dom";
import {GoHome } from "react-icons/go";

//Trae la informacion del personaje y crea la tarjeta del personaje

export default function Extendida (){
    let id=useParams().id;                                  //Guarda el id en la barra de direcciones
    const [personaje,setPersonaje]=useState([]);            //Crea el estado personaje
    const fetchPersonaje= () => fetch(`https://rickandmortyapi.com/api/character/${id}`)    //Promesa trae informacion de un personaje especifico
     .then(response => response.json())                                                     //Convierte la respuesta en un archivo json
     .then(pj => {
        if (pj !== undefined){
           setPersonaje(pj)                                                                 //Guarda la informacion en el estado personaje
        }
         })
    useEffect(() => {fetchPersonaje()// eslint-disable-next-line react-hooks/exhaustive-deps
},[id]);                                                                    //Siempre que cambie el id, hace el fetch

   if(personaje.name){                      //Revisa si hay algo en el estado, si lo hay grafica la tarjeta (evita errores por asincronia)
    return(
        <div>
            <img className="fondoExt" src={`${fondoExt}`} alt="Fondo Extendida"/>
            <img className="fondoExtpc" src={`${fondoExtpc}`} alt="Fondo ExtendidaPc"/>
            <div className="Extendida">
                <Link className="closelink" to={`/`}>
                    <button className="BotonC"><GoHome size={30}/></button>
                </Link>
                <img className="fotopersonaje" src={`${personaje.image}`} alt="Imagen personaje"/>
                <div className="infopj" >
                    <span>Nombre: {`${personaje.name}`}</span><br/>
                    <span>Estado: {`${personaje.status}`}</span><br/>
                    <span>Especie: {`${personaje.species}`}</span><br/>
                    <span>Genero: {`${personaje.gender}`}</span><br/>
                    <span>Ubicación: {`${personaje.location.name}`}</span>
                    <Link  className="link" to={`/episode/${personaje.id}`}>
                        <button className="Ver">Ver Episodios</button>
                    </Link>
                </div>                
            </div>
        </div>
    )}
   else{return <></>}
    
}
