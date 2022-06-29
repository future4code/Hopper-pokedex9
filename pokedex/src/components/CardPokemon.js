import React from "react";
import styled from  "styled-components"
import {switchDatail} from "./switchPage"
import {useNavigate} from "react-router-dom"
const MainContainer = styled.div`


`

export default function Card(){
    const navigate = useNavigate()
    return (

        <MainContainer>
           
            <button>Adicinar</button>
            <button onClick={()=>switchDatail(navigate)}>Ver Detalhes</button>
        </MainContainer>
    )
    
}