import React, { useContext, useEffect } from "react";
import { switchHome } from "../components/switchPage"
import { useNavigate } from "react-router-dom"
import Card from "../components/CardPokemon"
import pokeImg from "../img/pokelogo.svg.webp"
import { TelaPrincipal, BotaoPrimario, Img, PokedexHeaders } from "./StyledPokedex"
import { ContextGlobal } from "../Global/ContextGlobal";


export default function Pokedex() {

    const navigate = useNavigate()
    return (
        <>
            <PokedexHeaders>
                <Img src={pokeImg} />
                <h1>Pokedex</h1>
                <BotaoPrimario onClick={() => switchHome(navigate)} >Voltar para Home</BotaoPrimario>
            </PokedexHeaders>

            <Card name={"pokedex"} />
        </>
    )
}