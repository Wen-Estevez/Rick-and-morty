import './Home.css';
import fondo from "../Images/fondo.jpg";
import foto from "../Images/foto.jpg";
import ContenedorPersonajes from '../Componentes/ContenedorPersonajes';
import {useState} from 'react';
import { VscChevronLeft,VscChevronRight } from "react-icons/vsc";


export default function Home(){
    const [pagina,setPagina]=useState(1);

    return(
        <div className="home">
            <img className="fondo" src={`${fondo}`}></img>

            <div className="">
                <img className="foto" src={`${foto}`}></img>       
                <div className="botones">
                    <button className="btn" onClick={(e) => {
                        if (pagina<=1){}
                        else {setPagina(pagina-1)}
                        }}> <VscChevronLeft size={30}/> 
                    </button>
                    <button className="btn" onClick={(e) => {
                        setPagina(pagina+1);
                        }}> <VscChevronRight size={30}/>
                    </button>
            </div>     
        </div>


            <ContenedorPersonajes 
            pag={pagina}
            >

            </ContenedorPersonajes>
        </div>

    )
}
