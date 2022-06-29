import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "../pagina/Home"
import Detail from  "../pagina/Detail"
import Pokedex from "../pagina/Pokedex"

export default function Router(){
    return (
      
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/pokedex" element={<Pokedex/>} />
                <Route path="/detail" element= {<Detail/>} />
            </Routes>
            </BrowserRouter>
       
    )
}