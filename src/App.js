import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {

  const [cities, setCities] = useState([])
	const [restaurants, setRestaurants] = useState([])
	const [tags, setTags] = useState([])

	useEffect(() => {
		fetchData()
	}, [])


  //Fetching the Data
  const fetchData = () => {
		console.log('fetch is being called')
		fetch('http://localhost:3000/cities')
			.then((response) => response.json())
			.then((json) => setCities(json))
			//throw the error
			.catch((err) => console.log(err))
		fetch('http://localhost:3000/restaurants')
			.then((response) => response.json())
			.then((json) => setRestaurants(json))
			//throw the error
			.catch((err) => console.log(err))
		fetch('http://localhost:3000/tags')
			.then((response) => response.json())
			.then((json) => setTags(json))
			//throw the error
			.catch((err) => console.log(err))
  }
  

{/*use data = {data} and useParams to get data to routes!*/}
  return (
		<div className='App'>
				<Switch>
					<Route exact path='/'>
						<AllPokemon/>
					</Route>
					<Route path='/:id'>
						<PokemonInfo/>
					</Route>
					<Route path='/:id/:info'>
						<DetailedInfo/>
					</Route>
				</Switch>
		</div>
	)
}

export default App;
