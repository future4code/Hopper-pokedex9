import React from "react";
import Card from "../components/CardPokemon";
import {switchPokedex} from "../components/switchPage"
import {useNavigate} from "react-router-dom"
export default function Home(){
const navigate = useNavigate()
    return (
        <div>
            <h1>Home</h1>
            <Card/>
            <button onClick={()=>switchPokedex(navigate)} >Pokedex</button>
        </div>
    )
}