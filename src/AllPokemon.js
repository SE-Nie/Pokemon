import React from 'react'
import { Row, Col, Container, Card, InputGroup, Badge } from 'react-bootstrap'
import './App.css'

export default function AllPokemon(props) {
	return (
		<>{props.pokemons.map((pokemon) => (
			<Container fluid >
				<Row xs={1} sm={2} md={3} lg={4} xl={6}>

						<Col>
							<Card className="mb-3">
								<Card.Img variant='top' src='#' />
								<Card.Body>
									<Card.Title>{pokemon.name.english}</Card.Title>
									{pokemon.type.map((e) => (<Badge className="m-1" pill variant="success">{e}</Badge>))}
								</Card.Body>
								<Card.Footer>
									<InputGroup className='mb-3'>
										<InputGroup.Prepend>
											<InputGroup.Checkbox />
											<p>I will choose <br/>{pokemon.name.english} <br/>for battle</p>
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
