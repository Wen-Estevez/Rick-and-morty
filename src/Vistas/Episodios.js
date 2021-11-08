import { useParams } from "react-router";
export default function Episodios (){
    let id=useParams().id;
    console.log(id)
    return(
        <div>
            episodio
        </div>
    )


}