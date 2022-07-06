import React, { useContext } from "react";
import { switchHome } from "../../components/switchPage"
import { useNavigate } from "react-router-dom"
import { CardPoke, ButtonsCard, MainContainer } from "./Styled";
import { ContextGlobal } from "../../Global/ContextGlobal";
import ImgPoke from "../../components/ImagePoke";


export default function Pokedex() {

    const navigate = useNavigate()
    const { arrayPokedex } = useContext(ContextGlobal)

    console.log(arrayPokedex)

    return (
        <>
            <MainContainer>
                {arrayPokedex.map((newPoke, index) => {
                    return (
                        <CardPoke key={index}>

                            <ImgPoke id={index} />
                            <h4> {newPoke.name}</h4>
                            <ButtonsCard>
                                <button >Adicionar</button>
                                <button >Ver Detalhes</button>
                            </ButtonsCard>

                        </CardPoke>
                    )
                }
                )}



            </MainContainer>
            <button onClick={() => switchHome(navigate)} >Voltar para Home</button>
        </>
    )
}