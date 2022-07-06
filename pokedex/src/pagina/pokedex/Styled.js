import styled from "styled-components";

export const CardPoke = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
border: inset;
margin: 15px;
padding: 170px;
min-width: 0.5vw;
max-width: 0.1vw ;
min-height: 1vh;
height: 10vh;
background-color: red;
background-repeat: no-repeat;

> h4 {
    margin: 10px;
    text-align: center;
    width: 100px;
    background-color: white;
    border: 1px solid black;
}`

export const ButtonsCard = styled.div`
display: flex;

> button {
    border-radius: 20px;
    padding: 10px;
   margin: 10px;
   background: white;

   :hover{
    color: white;
    background: black;
   }
}`

export const MainContainer = styled.div`
display:flex;
flex-wrap:wrap;

justify-content: center;
`