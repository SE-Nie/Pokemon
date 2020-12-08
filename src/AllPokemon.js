import React from 'react'
import { Row, Col, Container, Card, InputGroup } from 'react-bootstrap'
import './App.css'

export default function AllPokemon(props) {
	return (
		<>
			<Container fluid>
				<Row xs={1} sm={2} md={3} lg={4} xl={6}>
					{props.pokemons.map((pokemon) => (
						<Col>
							<Card>
								<Card.Img variant='top' src='#' />
								<Card.Body>
									<Card.Title>{pokemon.name.english}</Card.Title>
									<Card.Text>TextTextText</Card.Text>
								</Card.Body>
								<Card.Footer>
									<InputGroup className='mb-3'>
										<InputGroup.Prepend>
											<InputGroup.Checkbox />
											<p>{pokemon.name.english}</p>
										</InputGroup.Prepend>
									</InputGroup>
								</Card.Footer>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</>
	)
}
