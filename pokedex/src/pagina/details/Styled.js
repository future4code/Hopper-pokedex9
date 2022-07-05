import styled from "styled-components"

export const Conteiner = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
`;

// IMAGENS 
export const Imagens = styled.div`
border: 2px solid red;
margin: 10px;
background-color: #cccccc;
> img {
  background: white;
  width: 200px;
  border: 2px solid black;
  margin: 10px;
}
`;

// DETALHES
export const Detalhes = styled.div`
display: flex;
flex-direction: column;
border: 2px solid red;
margin: 10px;
height: 50vh;

> p {
text-align: center;
padding: 10px;
color: black;
}

> h1 {
text-align: center;
border-bottom: 3px solid red;
font-size: 20px;
color: black;
background-color: #cccccc;
}
`;

//ELEMENTOS
export const Elementos = styled.div`
border: 2px solid red ;
display: flex;
position: absolute;
margin: 50px;
right: 0;
flex-direction: column;
width: 300px;

> h1 {
  background-color: #cccccc;
  color:black;
  font-size: 20px;
  text-align: center;
  border-bottom: 3px solid red;
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
}`;

//BOTÕES
export const BotaoPrimario = styled.div`
border: 1px solid red;
width: 10%;
height: 5%;
align-items: center;
justify-content: space-around;
display: flex;
position: absolute;
bottom: 0;
left: 0;
margin: 10px;
background-color: #cccccc;
cursor: pointer;

& :hover {
  color: red;
}

border-radius: 50px;
> p {
  background-color: #cccccc;
  color: black;
}


`;
export const BotaoSegundario= styled.div`
border: 1px solid red;
width: 10%;
height: 5%;
align-items: center;
justify-content: space-around;
display: flex;
position: absolute;
bottom: 0;
right: 0;
margin: 10px;
background-color: #cccccc;
cursor: pointer;

& :hover {
  color: red;
}

border-radius: 50px;
> p {
  background-color: #cccccc;
  color: black;
}
`;
