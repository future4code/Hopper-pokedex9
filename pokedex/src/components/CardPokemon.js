import React from "react";
import styled from  "styled-components"
import {switchDetail} from "./switchPage"
import {useNavigate} from "react-router-dom"
const MainContainer = styled.div`


`

export default function Card(){
    const navigate = useNavigate()
    return (

        <MainContainer>
           
            <button>Adicinar</button>
            <button onClick={()=>switchDetail(navigate)}>Ver Detalhes</button>
        </MainContainer>
    )
    
}