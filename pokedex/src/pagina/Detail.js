import React from "react";
import {switchHome} from "../components/switchPage"
import {useNavigate} from "react-router-dom"
export default function Detail(){
    const navigate = useNavigate()
    return(
        <div>
            <h1>Detalhes</h1>

           <button onClick={()=>switchHome(navigate)} >Voltar para Home</button>
            
        </div>
    )

}