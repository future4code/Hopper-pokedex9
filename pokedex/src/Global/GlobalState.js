import React, { useState } from "react";
import { ContextGlobal } from "./ContextGlobal"

export const GlobalState = (props) => {
  const [idPokemon, setIdPokemon] = useState()
  const [arrayPokedex, setArrayPokedex] = useState([])


  return <ContextGlobal.Provider value={{ idPokemon, setIdPokemon, arrayPokedex, setArrayPokedex}}>
    {props.children}
  </ContextGlobal.Provider>
}