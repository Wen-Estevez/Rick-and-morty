

export default function TarjetasEpisodios({id,name,date,episode}){



    return(
        <div>
            <span>{`${id}`}</span>
            <span>{`${name}`}</span>
            <span>{`${date}`}</span>
            <span>{`${episode}`}</span>

        </div>
    )
}