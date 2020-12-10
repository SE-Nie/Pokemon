import React, {useEffect, useState} from 'react';
import { Card } from 'react-bootstrap'

export default function PokemonImages() {
    const [pokeImage, setPokeImage] = useState()

    useEffect(() => {
        fetchPokeImages()

    }, [])

    const fetchPokeImages = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then((res)=> res.json())
            .then((res)=> setPokeImage(res.results))
    }
console.log(pokeImage)
    return (

        <>
            <Card.Img variant='top' src="https://assets.pokemon.com/assets/cms2/img/misc/countries/ch/country_detail_pokemon.png" />
        </>

    )

}



