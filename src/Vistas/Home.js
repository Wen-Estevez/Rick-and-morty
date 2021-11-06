import './Home.css';
import fondo from "../Images/fondo.jpg";
import foto from "../Images/foto.jpg";
import ContenedorPersonajes from '../Componentes/ContenedorPersonajes';


export default function Home(){

    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand text-uppercase" href="/">Rick and Morty App</a>
                </div>
            </nav>
            <img className="fondo" src={`${fondo}`}></img>

            <div>
            <img className="foto" src={`${foto}`}></img>            
            </div>

            <div className="texto">
                <p>Bueno, no puedo curar la muerte.</p>
            </div>

            <div>
                <a className="BAtras" href="#">Anterior</a>
                <a className="BSiguiente" href="#">Siguiente</a>
            </div>

            <ContenedorPersonajes>

            </ContenedorPersonajes>
        </div>

    )
}
