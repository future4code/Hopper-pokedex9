import axios from "axios";

export const getPoke = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/"
   return axios.get(url,{})

 }

