import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import AllPokemon from "./AllPokemon"
import PokemonId from "./PokemonId"
import PokemonInfo from "./PokemonInfo"
import { CardDeck } from "react-bootstrap"
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([])
	const [pokeid, setPokeid] = useState([])
	const [pokeinfo, setPokeinfo] = useState([])

	useEffect(() => {
		fetchData()
	}, [])


  //Fetching the Data
  const fetchData = () => {
		console.log('fetch is being called')
		fetch( `http://pokemon-backend-wbs.herokuapp.com/pokemon`)
			.then((response) => response.json())
			.then((json) => setPokemon(json))
			//throw the error
			.catch((err) => console.log(err))
		fetch('http://localhost:4000/pokemon/:id')
			.then((response) => response.json())
			.then((json) => setPokeid(json.id))
			//throw the error
			.catch((err) => console.log(err))
		fetch('http://localhost:4000/pokemon/:id/:info')
			.then((response) => response.json())
			.then((json) => setPokeinfo(json)
	  )
			//throw the error
			.catch((err) => console.log(err))
  }


//Route-Setup
//use data = {data}, props and useParams to get data to routes!
  return (
		<div className='App'>


				<Switch>
					<Route path='/pokemon'>
						<CardDeck>
							<AllPokemon pokemons = {pokemon}/>
						</CardDeck>
					</Route>
					<Route path='/:id'>
						<PokemonId pokeid = {pokeid} />
					</Route>
					<Route path='/:id/:info'>
						<PokemonInfo pokeinfo = {pokeinfo}/>
					</Route>
				</Switch>
		</div>
	)
}

export default App;
