import React from "react";
import {switchHome} from "../components/switchPage"
import {useNavigate} from "react-router-dom"

export default function Pokedex(){
    const navigate = useNavigate()
    return(
        <div>
            <h1>Pokedex</h1>
            <button onClick={()=>switchHome(navigate)} >Voltar para Home</button>
        </div>
    )
}