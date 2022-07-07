import styled from "styled-components"

export const Conteiner = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;

@media (min-width: 500px) and (max-width:1230px){
  grid-template-columns: 1fr;
}
`;

// IMAGENS 
export const Imagens = styled.div`
display: flex;
justify-content: center;
border: 5px solid black;
margin: 10px;
background-color: red;
> img {
  background: white;
  width: 200px;
  border: 5px solid black;
  border-radius: 50%;
  margin: 10px;
}
`;

// DETALHES
export const Detalhes = styled.div`
display: flex;
flex-direction: column;
border: 5px solid black;
margin: 10px;
height: 50vh;

> p {
text-align: center;
padding: 10px;
color: black;
}

> h1 {
text-align: center;
border-bottom: 5px solid black;
font-size: 20px;
color: white;
background-color: red;
}
`;

//ELEMENTOS
export const Elementos = styled.div`
border: 5px solid black ;
display: flex;
position: absolute;
margin: 11px;
right: 0;
flex-direction: column;
width: 300px;

> h1 {
  background-color: red;
  color:white;
  font-size: 20px;
  text-align: center;
  border-bottom: 5px solid black;
 }

> div {
  display: flex;
  justify-content: space-around;
  > img {
    margin: 10px;
    width: 30px;
  }
  > p {
    color: white;
  margin: 10px;
  padding: 20px;
  width: 10px;
border: 1px solid #1b98e0 ;
border-radius: 50%;
}
}

@media (min-width: 500px) and (max-width:1230px){
  position: relative;
  justify-content: center;
}
`;

//BOTÕES
export const BotaoPrimario = styled.button`
border: 3px solid black;
width: 10%;
height: 5%;
align-items: center;
justify-content: center;
display: flex;
position: absolute;
bottom: 0;
left: 0;
margin: 10px;
cursor: pointer;
border-radius: 50px;
font-size: 10px;
text-align: center;
:hover{
  background-color: red;
  > p {
    color: white;
  }
}

> p {
  color: black;
}

@media (min-width: 500px) and (max-width:1230px){
  top: 0;
}

`;
export const BotaoSegundario= styled.button`
border: 3px solid black;
width: 10%;
height: 5%;
align-items: center;
justify-content: center;
display: flex;
position: absolute;
bottom: 0;
right: 0;
margin: 10px;
cursor: pointer;
border-radius: 50px;
font-size: 10px;
text-align: center;

:hover{
  background-color: red;
  > p {
    color: white;
  }
}

> p {
  color: black;
}

@media (min-width: 500px) and (max-width:1230px){
  top: 0;
}
`
