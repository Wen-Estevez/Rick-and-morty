import './TarjetasPersonajes.css';
import { Link } from 'react-router-dom';

export default function TarjetasPersonajes({name,img,status, species,id}){

    return(
        <Link className="card-body" to={`/${id}`}>
        <div className="card" >
            <img className="imagen" src={`${img}`} alt="Imagen"/>
            <div className="info">
                <span >Nombre:  {name}  </span><br/>
                <span >Estado: {status}</span><br/>
                <span >Especie:  {species}</span>
            </div>
        </div>
        </Link>

    )

}

