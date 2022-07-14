import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "../pagina/Home"
import Detail from  "../pagina/details/Detail"
import Pokedex from "../pagina/Pokedex"
import { useState } from "react"

export default function Router(){
    const [pegarId ,setPegarId] = useState()
    return (
      
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home pegarId={setPegarId}/>} />
                <Route path="/pokedex" element={<Pokedex/>} />
                <Route path="/detail" element= {<Detail mandaId={pegarId}/>} />
            </Routes>
            </BrowserRouter>
       
    )
}