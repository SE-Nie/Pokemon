import React from 'react'
import { Card } from 'react-bootstrap'
import './Game.css'

export default function AllPokemon(props) {
	return (
		<Card bg='info' border='dark' className='cardstyle mb-2 mt-2'>
			<Card.Header>
				<Card.Title className='cardtitle'>{props.name}</Card.Title>
			</Card.Header>
			<Card.Img
				className='imgsize'
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${props.id}.gif`}
				fluid
			></Card.Img>
			<Card.Body>
				<ul className='no-bullets'>
					<li>HP: {props.hp}</li>
					<li>Attack : {props.attack}</li>
					<li>Defense : {props.defense}</li>
				</ul>
			</Card.Body>
		</Card>
	)
}
