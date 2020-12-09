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

	return (
		<>
			<p>hi</p>
			{pokemon.map((e) => (
				<li>{e}</li>
			))}
			{console.log(pokemon)}
		</>
	)
}
