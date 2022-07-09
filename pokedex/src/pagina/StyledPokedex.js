import styled from "styled-components";

export const BotaoPrimario = styled.button`
height: 5vh;
width: 10%;
border-radius: 50px;
background-color: transparent;
margin: 20px;
position: absolute;
left: 0;
margin: 60px;

:hover{
    color: white;
    border: 4px solid white;
    
}

@media (min-width: 1000px) and (max-width:1500px){
    margin: 50px;
    font-size: 20px;

}
@media (min-width: 400px) and (max-width:1500px){
  margin:20px;
  font-size: 15px;
  width: 15%;
  height: 5%;
}
`;

export const Img = styled.img`
    display:flex;
  width:10vw;
  margin: 20px;
`;

export const PokedexHeaders = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width: 100vw;
background-color:#006494;

>h1 {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    text-align: center;
    font-size: 40px;
    width: 10vw;
    margin: 20px;
}
@media (min-width: 1500px) and (max-width:2000px){
 > img {
    width: 20vw;
    min-width: 18vw;
  }
  >h1{
    margin: 10px;
  }
}
@media (min-width: 400px) and (max-width:1500px){
 > img {
    width: 15vw;
    min-width: 10vw;
    
  }
  >h1{
    margin: 5px;
    border: none;
  }
}
`;