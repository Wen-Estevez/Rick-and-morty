import { useState,useEffect } from "react";
import { useParams} from "react-router";
import TarjetasEpisodios from "../Componentes/TarjetasEpisodios"

export default function Episodios (){
    const [episodios,setEpisodios]=useState([]);
    let id=useParams().id;
    const fetchEps= ()=>fetch(`https://rickandmortyapi.com/api/character/${id}`)
     .then(response => response.json())
     .then(pj => pj.episode)
     .then(episodios=>{
        episodios.map((ep=>{
            fetch(`${ep}`)
                .then(response=>response.json())
                .then(ep=>{
                    setEpisodios(oldEpisodios => [...oldEpisodios, ep])
                    })
                    return ep;
        }))
     })

     useEffect(() => {fetchEps()// eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <div>
            {episodios.map((ep)=><TarjetasEpisodios
            key={ep.id}
            id={ep.id}
            name={ep.name}
            date={ep.air_date}
            episode={ep.episode}
            />)}
        </div>
    )


}