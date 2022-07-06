import React, { useState } from "react";
import { ContextGlobal } from "./ContextGlobal"

export const GlobalState = (props) => {
  const [idPokemon, setIdPokemon] = useState()
  const [pokedex , setPokedex] = useState([])
  
  return <ContextGlobal.Provider value={{ idPokemon, setIdPokemon ,pokedex,setPokedex,}}>
    {props.children}
  </ContextGlobal.Provider>
}