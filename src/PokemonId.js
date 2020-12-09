import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './App.css'

export default function PokemonId() {
	const { id } = useParams()
	const [pokemon, setPokemon] = useState()

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = () => {
		fetch(`http://pokemon-backend-wbs.herokuapp.com/pokemon/${id}`)
			.then((response) => response.json())
			.then((json) => setPokemon(json))
			//throw the error
			.catch((err) => console.log(err))
	}

	return (
		<>
			<p>hi</p>
			{pokemon && pokemon.name.english}
			{console.log(pokemon)}
		</>
	)
}
