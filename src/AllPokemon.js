import React from 'react'
import { Row, Col, Container, Card, InputGroup, Badge } from 'react-bootstrap'
import './App.css'
import PokemonImages from "./PokemonImages";

export default function AllPokemon(props) {
	return (
		<>
			{props.pokemons.map((pokemon) => (
			<Container fluid >
					<Row xs={1} sm={2} md={3} lg={4} xl={6}>
						<Col>
							<Card className="mb-3">
								<PokemonImages />
								<Card.Body>
									<Card.Title>{pokemon.name.english}</Card.Title>
									{pokemon.type.map((e) => (<Badge className="m-1" pill variant="success">{e}</Badge>))}
								</Card.Body>

								<Card.Footer>
									<InputGroup className='mb-3'>
										<InputGroup.Prepend>
											<InputGroup.Checkbox />
											<p>Choose the card</p>
										</InputGroup.Prepend>
									</InputGroup>
								</Card.Footer>
							</Card>
						</Col>
				</Row>
			</Container>
					))}
			</>
	)}
