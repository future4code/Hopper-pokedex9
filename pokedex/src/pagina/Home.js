import React from "react";
import Card from "../components/CardPokemon";
import { switchPokedex } from "../components/switchPage"
import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import pokeImg from "../img/pokelogo.svg.webp"
import pokedex from "../img/pokedex2.png";

const MainContainer = styled.div`
display:flex;
justify-content:center;

background-color:#006494;

img{
    display:flex;
  width:15vw;
    
}

`
const DisplayCard = styled.div`

margin-left:7%;
`
const ImgPoke = styled.img`

cursor: pointer;

`

export default function Home() {
    const navigate = useNavigate()
    return (

        <div>
            <MainContainer>
                <img src={pokeImg} />

            </MainContainer>
            <h3 onClick={() => switchPokedex(navigate)} src={pokedex}>Pokedex</h3>
            <ImgPoke onClick={() => switchPokedex(navigate)} src={pokedex} width="80px" />

            <DisplayCard>
                <Card />
            </DisplayCard>


        </div>






    )
}


