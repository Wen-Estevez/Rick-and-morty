import { useParams } from "react-router"

export default function Estendida (){
   let tarjeta= useParams().id

    return(
        <div>
        soy una tarjeta extendida
        {`${tarjeta}`}
        </div>
    )
}