import './TarjetasPersonajes.css';

export default function TarjetasPersonajes({name,img,status, species}){

    return(
        <div className="card" >
            <img className="imagen" src={`${img}`} alt="Imagen"/>
            <div className="info">
                <span className="card-title">Nombre:  {name}  </span><br/>
                <span className="card-body">Estado: {status}</span><br/>
                <span className="card-body">Especie:  {species}</span>
            </div>
        </div>
       

    )

}

