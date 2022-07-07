import React, { useContext, useEffect, useState } from "react";
import { switchHome } from "../../components/switchPage"
import { useNavigate } from "react-router-dom"
import { Conteiner, Imagens, Detalhes, Elementos, BotaoPrimario, BotaoSegundario } from './Styled'
import { tiposPokemon } from "./TipoPokemon"
import axios from "axios";
import { ContextGlobal } from "../../Global/ContextGlobal";

export default function Detail() {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState({})
    const [primeiroTipo, setPrimeiroTipo] = useState("")
    const [segundoTipo, setSegundoTipo] = useState("")
    const [imagemUm, setImagemUm] = useState("")
    const [imagemSegundo, setImagemSegundo] = useState("")
    const { idPokemon } = useContext(ContextGlobal)

    const PegarPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon || localStorage.getItem("idPokemon")}`)
            .then((resp) => {
                // console.log(resp.data)
                setPokemon(resp.data)
                setPrimeiroTipo(resp.data.types[0].type.name)
                setSegundoTipo(resp.data.types[1].type.name)
            })
            .catch(() => {

            })
    }

    useEffect(() => {
            PegarPokemon()
    }, [])

    useEffect(()=>{
        tiposPokemon(primeiroTipo, setImagemUm)
        tiposPokemon(segundoTipo,setImagemSegundo)
    })

    return (
        <div>
            <Conteiner>

                <Imagens>
                    <img src={pokemon.sprites && pokemon.sprites.front_default} alt="" />
                </Imagens>
                <Imagens>
                    <img src={pokemon.sprites && pokemon.sprites.back_default} alt="" />
                </Imagens>

                <Elementos>
                    <h1>TIPO</h1>
                    <div>
                        <img src={imagemUm} alt="" />
                        <img src={imagemSegundo} alt="" />
                    </div>
                </Elementos>

                <Detalhes>

                    <h1>Poderes</h1>

                    <p><b>HP :</b> {pokemon.stats && pokemon.stats[0].base_stat}</p>
                    <p><b>ATTACK :</b> {pokemon.stats && pokemon.stats[1].base_stat}</p>
                    <p><b>DEFENSE :</b> {pokemon.stats && pokemon.stats[2].base_stat}</p>
                    <p><b>SPECIAL-ATTACK :</b> {pokemon.stats && pokemon.stats[3].base_stat}</p>
                    <p><b>SPECIAL-DEFENSE :</b> {pokemon.stats && pokemon.stats[4].base_stat}</p>
                    <p><b>SPEED :</b>  {pokemon.stats && pokemon.stats[5].base_stat}</p>

                </Detalhes>
                <Detalhes>

                    <h1>Principais Ataques</h1>

                    <p>{pokemon.moves && pokemon.moves[0].move.name}</p>
                    <p>{pokemon.moves && pokemon.moves[1].move.name}</p>
                    <p>{pokemon.moves && pokemon.moves[2].move.name}</p>
                    <p>{pokemon.moves && pokemon.moves[3].move.name}</p>
                    {/* <p>{pokemon.moves && pokemon.moves[4].move.name}</p> */}

                </Detalhes>

                <BotaoPrimario onClick={() => switchHome(navigate)}>
                    <p>VOLTAR PARA HOME</p>
                </BotaoPrimario>

                <BotaoSegundario>
                    <p>IR PARA POKEDEX</p>
                </BotaoSegundario>
            </Conteiner>

        </div>
    )

}