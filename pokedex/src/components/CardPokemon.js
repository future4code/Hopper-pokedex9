import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { switchDetail } from "./switchPage"
import { useNavigate } from "react-router-dom"
import { getPoke } from "../components/importPoke"
import ImgPoke from "./ImagePoke"
import pokeWall from    "../img/pokewall.jpg"
const MainContainer = styled.div`
display:flex;
flex-wrap:wrap;

`
const CardPoke = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
border:inset;
margin: 15px;
padding: 9%;
width: 1vw;
height: 2vh;
background-image: url(${pokeWall});

`
const ButtonsCard = styled.div`
display: flex;

button{
   
}

`
export default function Card() {
    const [poke, setPoke] = useState([])
    
    useEffect(() => {

        getPoke().then((res) => {
            setPoke(res.data.results)
        })

    },
        [])

    const navigate = useNavigate()
    return (

        <MainContainer>

           
            {poke.map((newPoke, index) => {

                return (
                    
                    <CardPoke>
                       
                      
                        <ImgPoke id={index} />
                        <h4> {newPoke.name}</h4>
                        <ButtonsCard>
                            <button>Adicinar</button>
                            <button onClick={() => switchDetail(navigate)}>Ver Detalhes</button>
                        </ButtonsCard>
                       
                        

                    </CardPoke>
                )

            })}
        
        </MainContainer>
    )

}