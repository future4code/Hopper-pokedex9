import React, { useContext , useEffect } from "react";
import {switchHome} from "../components/switchPage"
import {useNavigate} from "react-router-dom"
import Card  from "../components/CardPokemon"
import { ContextGlobal } from "../Global/ContextGlobal";

export default function Pokedex(){
 
    const navigate = useNavigate()
    return(
        <div>
            <h1>Pokedex</h1>

            <button onClick={()=>switchHome(navigate)} >Voltar para Home</button>
            <Card name={"pokedex"} />
        </div>
    )
}