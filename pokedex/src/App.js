import React from "react";
import Rota from "./components/Router"
import { GlobalState } from "./Global/GlobalState";
import GlobalStyled from "./GlobalStyled";

export default function App(){
  return(
    <div>
      <GlobalState>
      <Rota/>
      </GlobalState>
      
      
      <GlobalStyled/>
    </div>
  )
}