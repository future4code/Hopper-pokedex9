import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components"
import { switchDetail } from "./switchPage"
import { useNavigate } from "react-router-dom"
import { getPoke } from "../components/importPoke"
import ImgPoke from "./ImagePoke"
import { ContextGlobal } from "../Global/ContextGlobal"
// import pokeWall from "../img/pokewall.jpg"

const MainContainer = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: center;

`
const CardPoke = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
border: inset;
margin: 15px;
padding: 170px;
min-width: 0.5vw;
max-width: 0.1vw ;
min-height: 1vh;
height: 10vh;
background-color: red;
background-repeat: no-repeat;

> h4 {
    margin: 10px;
    text-align: center;
    width: 100px;
    background-color: white;
    border: 1px solid black;
}

`

const ButtonsCard = styled.div`
display: flex;

> button {
    border-radius: 20px;
    padding: 10px;
   margin: 10px;
   background: white;

   :hover{
    color: white;
    background: black;
   }
}
`

export default function Card() {
    const [poke, setPoke] = useState([])
    const {  setIdPokemon } = useContext(ContextGlobal)

    useEffect(() => {

        getPoke().then((res) => {
            setPoke(res.data.results)
        })

    },
        [])

    const navigate = useNavigate()

    const onClickDetalhes= (index) => {
        switchDetail(navigate)
        setIdPokemon(index+1)
        localStorage.setItem("idPokemon", index+1)
    }


    return (

        <MainContainer>


            {poke.map((newPoke, index) => {

                return (

                    <CardPoke key={index}>


                        <ImgPoke id={index} />
                        <h4> {newPoke.name}</h4>
                        <ButtonsCard>
                            <button>Adicionar</button>
                            <button onClick={() => onClickDetalhes(index)}>Ver Detalhes</button>
                        </ButtonsCard>



                    </CardPoke>
                )

            })}

        </MainContainer>
    )

}