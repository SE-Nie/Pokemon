import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './App.css'
import {Badge, Card, Col, Container, InputGroup, Row} from "react-bootstrap";

export default function PokemonId() {
	const { id } = useParams()
	const [pokemon, setPokemon] = useState()
	const [pokeImage, setPokeImage] = useState([])

	useEffect(() => {
		fetchData()
		fetchPokeImages()
	}, [])

	const fetchData = () => {
		fetch(`http://pokemon-backend-wbs.herokuapp.com/pokemon/${id}`)
			.then((response) => response.json())
			.then((json) => setPokemon(json))
			//throw the error
			.catch((err) => console.log(err))
	}

	const fetchPokeImages = () => {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
			.then((res)=> res.json())
			.then((images)=> setPokeImage(images.results))
	}


	console.log(pokeImage)
	return (
		<>

			<Container fluid>
				<Row xs={1} sm={2} md={3} lg={4} xl={6}>
						<Col>
							<Card>
								<Card.Img variant='top' src="#" />
								<Card.Body>
									<Card.Title>{pokemon && pokemon.name.english}</Card.Title>
									<Card.Text>There can be a text</Card.Text>
								</Card.Body>
								<Card.Footer> There can be a footer text
									</Card.Footer>
							</Card>
						</Col>
				</Row>
			</Container>
		</>
	)
}
