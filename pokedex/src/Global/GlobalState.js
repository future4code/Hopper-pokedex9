import React, { useState } from "react";
import { ContextGlobal } from "./ContextGlobal"

export const GlobalState = (props) => {
  const [idPokemon, setIdPokemon] = useState()


  return <ContextGlobal.Provider value={{ idPokemon, setIdPokemon}}>
    {props.children}
  </ContextGlobal.Provider>
}