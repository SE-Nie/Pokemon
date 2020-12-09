import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './App.css'

export default function PokemonId() {
	const { id, info } = useParams()
	const [pokemon, setPokemon] = useState()

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = () => {
		fetch(`http://pokemon-backend-wbs.herokuapp.com/pokemon/${id}/${info}`)
			.then((response) => response.json())
			.then((json) => setPokemon(json))
			//throw the error
			.catch((err) => console.log(err))
	}

	if (pokemon) {
		if (info === 'type') {
			return (
				<>
					<p>hi</p>
					{pokemon.map((e) => (
						<li>{e}</li>
					))}
				</>
			)
		} else {
			return Object.entries(pokemon).map((e) => (
				<li>
					{e[0]}={e[1]}
				</li>
			))
		}
	} else {
		return <h1>loading..</h1>
	}
}
