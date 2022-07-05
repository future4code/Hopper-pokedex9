import React, {useState, useEffect} from "react";
import axios from "axios"
import styled from "styled-components";

const ImgContainer = styled.div`
display:flex;
justify-content: center;
img{
    background: white;
    border-radius: 50%;
    min-width: 10vw;
    max-width: 12vw;
    min-height: 10vh;
    max-height: 15vh;
    border: 10px solid black;
}
`

export default function ImgPoke(props){
const [imagePoke , setImagePoke] = useState("")

useEffect(()=>{
    imgPoke(props.id)
},[])
const imgPoke = (id) =>{
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id + 1}`,{

    }).then((res)=>{
        setImagePoke(res.data.sprites.front_default)
    })
}
return(

    <ImgContainer>
    <img src={imagePoke} />
    </ImgContainer>
    
)

}