import './TarjetasPersonajes.css';

export default function TarjetasPersonajes({name,img,status, species}){

    return(
        <div className="card" >
            <img className="imagen" src={`${img}`} alt="Imagen"/>
            <span className="card-title">Nombre:  {name}  </span>
            <span className="card-body">Estado: {status}</span>
            <span className="card-body">Especie:  {species}</span>
        </div>
       

    )

}

