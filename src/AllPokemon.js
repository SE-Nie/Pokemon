import React from 'react'
import {Card, InputGroup, Badge} from 'react-bootstrap'

export default function AllPokemon(props) {
    return (
        <>
            {props.pokemons.map((pokemon) => (
                <div>
                    <Card className="mb-2 mt-2">
                        <Card.Img className="img-thumbnail" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${pokemon.id}.gif`}></Card.Img>
                        <Card.Body>
                            <Card.Title>{pokemon.name.english}</Card.Title>
                            {pokemon.type.map((e) => (<Badge className="m-1" pill variant="success">{e}</Badge>))}
                        </Card.Body>
                        <Card.Footer>
                            <InputGroup className='mb-3'>
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox/>
                                    <p>Choose the card</p>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Card.Footer>
                    </Card>
                </div>
            ))}
        </>
    )
}
