import React from "react";
import Card from "../components/CardPokemon";
import { switchPokedex } from "../components/switchPage"
import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import pokeImg from "../img/pokelogo.svg.webp"
import pokedex from "../img/pokedex2.png";

//HEADERS
const MainContainer = styled.div`
display:flex;
justify-content:center;

background-color:#006494;
/* width: 100vw; */

img{
    display:flex;
  width:10vw;
  margin: 20px;
}
@media (min-width: 500px) and (max-width:1500px){
 > img {
    width: 25vw;
    min-width: 20vw;
  }
}
`
//CARD POKEMON
const DisplayCard = styled.div`
margin-left:7%;
`

//IMAGEM
const ImgPoke = styled.img`
cursor: pointer;
`

//BOTÕES
const BotaoPrimario = styled.button`
justify-content: center;
align-items: center;
margin: 30px;
width: 10%;
height: 5vh;
border-radius: 50px;
background-color: transparent;
position: absolute;
left: 0;
cursor: pointer;
border: 2px solid white;
:hover {
    color: white;
    border: 4px solid white;
}
> p {
    color: white;
}
@media (min-width: 500px) and (max-width:1500px){
  margin:40px;
  font-size: 10px;
  width: 15%;
height: 5%;
}
`;

export default function Home() {
    const navigate = useNavigate()
    return (

        <div>
            <MainContainer>
                <img src={pokeImg} />

                <BotaoPrimario onClick={() => switchPokedex(navigate)}>
                    <p>POKEDEX</p>
                </BotaoPrimario>

            </MainContainer>
            {/* <h3 onClick={() => switchPokedex(navigate)} src={pokedex}>Pokedex</h3>
            <ImgPoke onClick={() => switchPokedex(navigate)} src={pokedex} width="80px" /> */}



            <DisplayCard>
                <Card />
            </DisplayCard>


        </div>






    )
}


