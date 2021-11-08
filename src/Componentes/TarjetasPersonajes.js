import './TarjetasPersonajes.css';
import { Link } from 'react-router-dom';

export default function TarjetasPersonajes({name,img,status, species,id}){

    return(
        <Link to={`/${id}`}>
        <div className="card" >
            <img className="imagen" src={`${img}`} alt="Imagen"/>
            <div className="info">
                <span className="card-title">Nombre:  {name}  </span><br/>
                <span className="card-body">Estado: {status}</span><br/>
                <span className="card-body">Especie:  {species}</span>
            </div>
        </div>
        </Link>

    )

}

