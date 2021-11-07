import './Home.css';
import fondo from "../Images/fondo.jpg";
import foto from "../Images/foto.jpg";
import ContenedorPersonajes from '../Componentes/ContenedorPersonajes';
import {useState} from 'react';


export default function Home(){
    const [pagina,setPagina]=useState(1);

    return(
        <div className="home">
            <img className="fondo" src={`${fondo}`}></img>

            <div>
                <img className="foto" src={`${foto}`}></img>       
                <div className="botones">
                    <button className="botones" onClick={(e) => {
                        setPagina(pagina-1);
                        }}> Anterior 
                    </button>
                    <button className="botones" onClick={(e) => {
                        setPagina(pagina+1);
                        }}> Siguiente 
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
