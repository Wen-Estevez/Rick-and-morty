import './TarjetasEpisodios.css';

export default function TarjetasEpisodios({id,name,date,episode}){



    return(
        <div className="Episodios">
            <span>{`${id}`}</span><br/>
            <span>{`${name}`}</span><br/>
            <span>{`${date}`}</span><br/>
            <span>{`${episode}`}</span>

        </div>
    )
}