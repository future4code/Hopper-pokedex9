import React, {useState, useEffect} from "react";
import axios from "axios"
import styled from "styled-components";

const ImgContainer = styled.div`
display:flex;
justify-content: center;
img{
    
    width:15vw;
    height: 15vh;
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