import styled from "styled-components"
import dos from "../Images/2.jpg"
import tres from "../Images/3.jpg"
import cuatro from "../Images/4.jpg"
import cinco from "../Images/5.jpg"
import seis from "../Images/6.jpg"

const ContEpisodios = styled.div`
    background-image:url(${(props)=>{               //Recibe en la variable global props que contiene lo que pasamos por parametro
        switch (props.id%5){                        //Hace el modulo y le da un fondo a cada episodio
            case 0: return dos
            case 1: return tres
            case 2: return cuatro
            case 3: return cinco
            default: return seis
        }}});
    width:170px;
    height:270px;
    background-position: center no-repeat;
    border-radius:10px;
    margin: 15px;
    -webkit-box-shadow: 0px 2px 13px -2px rgba(161,161,161,1);
    -moz-box-shadow: 0px 2px 13px -2px rgba(161,161,161,1);
    box-shadow: 0px 2px 13px -2px rgba(161,161,161,1);

    @media (min-width:992px){
        &:hover{
            transform:  rotateY(180deg); 
            transition: transform .2s;

    }
    }
`;
const TextoInfo = styled.span`                          //Titulos de las tarjetas
    text-align: center;
    color: #fff;
    padding-top: 0.3rem;
    margin-left: auto;
    margin-right: auto;
    display: block;
`;

//Recibe la informacion y grafica una tarjeta por cada episodio

export default function TarjetasEpisodios({id,name,date,episode}){

    return(
        <ContEpisodios id={id}>
            <TextoInfo>- {`${id}`}</TextoInfo>
            <TextoInfo>- {`${name}`}</TextoInfo>
            <TextoInfo>- {`${date}`}</TextoInfo>
            <TextoInfo>- {`${episode}`}</TextoInfo>
        </ContEpisodios>
    )
}
