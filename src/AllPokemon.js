import React from 'react'
import {Card, InputGroup, FormControl } from "react-bootstrap"
import './App.css'


export default function AllPokemon(props) {
    return(
       // {props.data.map((pokemon)=>{
        <>

            <Card>
                <Card.Img variant="top" src="https://pokeapi.co/api/v2/ability/150/" />
                <Card.Body>
                    <Card.Title>POKEMON.NAME</Card.Title>
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

            <Card>
                <Card.Img variant="top" src="https://pokeapi.co/api/v2/ability/150/" />
                <Card.Body>
                    <Card.Title>POKEMON.NAME</Card.Title>
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

            <Card>
                <Card.Img variant="top" src="https://pokeapi.co/api/v2/ability/150/" />
                <Card.Body>
                    <Card.Title>POKEMON.NAME</Card.Title>
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

        </>
        //  })}
    )
}