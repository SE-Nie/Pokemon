import React from 'react'
import {Card, InputGroup } from "react-bootstrap"
import './App.css'


export default function AllPokemon(props) {
    return(
        <>
            {props.pokemons.map((pokemon) => (
            <Card>
                <Card.Img variant="top" src="#" />
                <Card.Body>
                    <Card.Title>this is from the card{pokemon[0]}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox />
                            <p>POKEMON NAME</p>
                        </InputGroup.Prepend>
                    </InputGroup>
                </Card.Footer>
            </Card>
            ))}

        </>

    )
}