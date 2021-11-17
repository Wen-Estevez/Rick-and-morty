import { useState,useEffect } from "react";
import { useParams} from "react-router";
import TarjetasEpisodios from "../Componentes/TarjetasEpisodios";
import './Episodios.css';
import { Link } from "react-router-dom";
import {GoHome } from "react-icons/go";

//Trae la informacion de los episodios en los que aparece el personaje
//Trae la informacion de cada episodio para crear tarjetas con la informacion

export default function Episodios (){
    const [episodios,setEpisodios]=useState([]);                        //Crea el estado episodios
    let id=useParams().id;                                              //Guarda la informacion de la barra de navegacion
    const fetchEps= ()=>fetch(`https://rickandmortyapi.com/api/character/${id}`)    //Trae informacion del personaje
     .then(response => response.json())                                  //Convierte la informacion en un json
     .then(pj => pj.episode)
     .then(episodios=>{
        episodios.map((ep=>{                    //Map para cada elemento del arreglo hace algo
            fetch(`${ep}`)                                              //Para cada episodio va a hacer otra promesa
                .then(response=>response.json())                        //guarda ese resultado en un json
                .then(ep=>{
                    setEpisodios(oldEpisodios => [...oldEpisodios, ep]) //Agrega cada uno de esos episodios al estado espisodios
                    })
                    return ep;
        }))
     })

     useEffect(() => {fetchEps()// eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);                                                                   //cuando hay un cambio, llama al fetch

    return(
        <div>            
            <Link className="close" to={`/`}>
                    <button className="Boton"><GoHome size={30}/></button>
            </Link>
            <div className="CardEpisodios">
            {episodios.map((ep)=><TarjetasEpisodios
            key={ep.id}
            id={ep.id}
            name={ep.name}
            date={ep.air_date}
            episode={ep.episode}
            />)}
            </div>
        </div>
    )


}
