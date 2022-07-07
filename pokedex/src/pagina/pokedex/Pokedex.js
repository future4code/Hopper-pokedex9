import React, { useContext } from "react";
import { switchHome } from "../../components/switchPage"
import { useNavigate } from "react-router-dom"
import { CardPoke, ButtonsCard, MainContainer } from "./Styled";
import ImgPoke from "../../components/ImagePoke";


export default function Pokedex() {

    const navigate = useNavigate()

    return (
        <>
            <MainContainer>
            </MainContainer>
            <button onClick={() => switchHome(navigate)} >Voltar para Home</button>
        </>
    )
}