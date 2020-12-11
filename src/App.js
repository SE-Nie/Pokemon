import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import AllPokemon from './AllPokemon'
import PokemonId from './PokemonId'
import PokemonInfo from './PokemonInfo'
import { CardDeck } from 'react-bootstrap'
import Header from './Header'
import Game from './Game'
import Footer from './Footer'
import './App.css'

function App() {
	const [pokemon, setPokemon] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	//Fetching the Data
	const fetchData = () => {
		console.log('fetch is being called')
		fetch(`http://pokemon-backend-wbs.herokuapp.com/pokemon`)
			.then((response) => response.json())
			.then((json) => setPokemon(json))
			//throw the error
			.catch((err) => console.log(err))
	}

	//Route-Setup
	//use data = {data}, props and useParams to get data to routes!
	return (
		<div>
			<Header />
			<div>
				<Switch>
					<Route exact path='/pokemon'>
						<CardDeck>
							<AllPokemon pokemons={pokemon} />
						</CardDeck>
					</Route>
					<Route exact path='/pokemon/:id'>
						<CardDeck>
							<PokemonId />
						</CardDeck>
					</Route>
					<Route path='/pokemon/:id/:info'>
						<CardDeck>
							<PokemonInfo />
						</CardDeck>
					</Route>
					<Route path='/game'>
						<Game pokemona={pokemon} />
					</Route>
				</Switch>
			</div>
		</div>
	)
}

export default App
