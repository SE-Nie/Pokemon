import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import './Game.css'

export default function Game() {
	var player1 = [
		{
			id: 1,
			name: {
				english: 'Bulbasaur',
				japanese: 'フシギダネ',
				chinese: '妙蛙种子',
				french: 'Bulbizarre',
			},
			type: ['Grass', 'Poison'],
			base: {
				HP: 45,
				Attack: 49,
				Defense: 49,
				'Sp. Attack': 65,
				'Sp. Defense': 65,
				Speed: 45,
			},
		},
		{
			id: 2,
			name: {
				english: 'Ivysaur',
				japanese: 'フシギソウ',
				chinese: '妙蛙草',
				french: 'Herbizarre',
			},
			type: ['Grass', 'Poison'],
			base: {
				HP: 60,
				Attack: 62,
				Defense: 63,
				'Sp. Attack': 80,
				'Sp. Defense': 80,
				Speed: 60,
			},
		},
		{
			id: 3,
			name: {
				english: 'Venusaur',
				japanese: 'フシギバナ',
				chinese: '妙蛙花',
				french: 'Florizarre',
			},
			type: ['Grass', 'Poison'],
			base: {
				HP: 80,
				Attack: 82,
				Defense: 83,
				'Sp. Attack': 100,
				'Sp. Defense': 100,
				Speed: 80,
			},
		},
		{
			id: 4,
			name: {
				english: 'Charmander',
				japanese: 'ヒトカゲ',
				chinese: '小火龙',
				french: 'Salamèche',
			},
			type: ['Fire'],
			base: {
				HP: 39,
				Attack: 52,
				Defense: 43,
				'Sp. Attack': 60,
				'Sp. Defense': 50,
				Speed: 65,
			},
		},
		{
			id: 5,
			name: {
				english: 'Charmeleon',
				japanese: 'リザード',
				chinese: '火恐龙',
				french: 'Reptincel',
			},
			type: ['Fire'],
			base: {
				HP: 58,
				Attack: 64,
				Defense: 58,
				'Sp. Attack': 80,
				'Sp. Defense': 65,
				Speed: 80,
			},
		},
	]
	var player2 = [
		{
			id: 6,
			name: {
				english: 'Charizard',
				japanese: 'リザードン',
				chinese: '喷火龙',
				french: 'Dracaufeu',
			},
			type: ['Fire', 'Flying'],
			base: {
				HP: 78,
				Attack: 84,
				Defense: 78,
				'Sp. Attack': 109,
				'Sp. Defense': 85,
				Speed: 100,
			},
		},
		{
			id: 7,
			name: {
				english: 'Squirtle',
				japanese: 'ゼニガメ',
				chinese: '杰尼龟',
				french: 'Carapuce',
			},
			type: ['Water'],
			base: {
				HP: 44,
				Attack: 48,
				Defense: 65,
				'Sp. Attack': 50,
				'Sp. Defense': 64,
				Speed: 43,
			},
		},
		{
			id: 8,
			name: {
				english: 'Wartortle',
				japanese: 'カメール',
				chinese: '卡咪龟',
				french: 'Carabaffe',
			},
			type: ['Water'],
			base: {
				HP: 59,
				Attack: 63,
				Defense: 80,
				'Sp. Attack': 65,
				'Sp. Defense': 80,
				Speed: 58,
			},
		},
		{
			id: 9,
			name: {
				english: 'Blastoise',
				japanese: 'カメックス',
				chinese: '水箭龟',
				french: 'Tortank',
			},
			type: ['Water'],
			base: {
				HP: 79,
				Attack: 83,
				Defense: 100,
				'Sp. Attack': 85,
				'Sp. Defense': 105,
				Speed: 78,
			},
		},
		{
			id: 10,
			name: {
				english: 'Caterpie',
				japanese: 'キャタピー',
				chinese: '绿毛虫',
				french: 'Chenipan',
			},
			type: ['Bug'],
			base: {
				HP: 45,
				Attack: 30,
				Defense: 35,
				'Sp. Attack': 20,
				'Sp. Defense': 20,
				Speed: 45,
			},
		},
	]

	let [alive, setAlive] = useState(true)

	let [i, setI] = useState(0)
	let [j, setJ] = useState(0)

	let [pokemon1, setPokemon1] = useState(player1[0].base)
	let [pokemon2, setPokemon2] = useState(player2[0].base)

	let [oneIsNext, setOneIsNext] = useState(false)
	let [pointsPlayer1, setPointsPlayer1] = useState(0)
	let [pointsPlayer2, setPointsPlayer2] = useState(0)

	useEffect(() => {
		whoIsFirst()
	}, [pokemon1.speed, pokemon2.speed])

	const whoIsFirst = () => {
		if (pokemon1.speed >= pokemon2.speed) {
			setOneIsNext(true)
			console.log('Its player Ones turn')
		} else {
			setOneIsNext(false)
			console.log('Its Computers turn')
		}
	}

	useEffect(() => {
		if (!oneIsNext && alive) {
			computerAttack()
		}
	}, [oneIsNext])

	const hadleClick = () => {
		if (oneIsNext && alive) {
			playerOneAttack()
		} else {
			alert('Wait for your turn!')
		}
	}

	const playerOneAttack = () => {
		console.log('player one is attackig!')

		pokemon2.HP =
			pokemon2.HP - Math.floor((pokemon2.Defense / 100) * pokemon1.Attack)

		setOneIsNext(false)
		setPointsPlayer1(
			pointsPlayer1 + Math.floor((pokemon2.Defense / 100) * pokemon1.Attack)
		)
		console.log(
			pokemon1.HP,
			pokemon2.HP,
			'Player ones turn:',
			oneIsNext,
			pointsPlayer1,
			pointsPlayer2
		)
		if (pokemon2.HP <= 0) {
			console.log('Computers pokemon dies')
			setJ(j + 1)
			if (j < 4) {
				setPokemon2(player2[j].base)
			} else {
				console.log('computer is dead!')
				setAlive(false)
			}
		}
	}
	const computerAttack = () => {
		if (alive) {
			console.log('computer is attackig!')
			setOneIsNext(true)
			pokemon1.HP =
				pokemon1.HP - Math.floor((pokemon1.Defense / 100) * pokemon2.Attack)

			setPointsPlayer2(
				pointsPlayer2 + Math.floor((pokemon1.Defense / 100) * pokemon2.Attack)
			)
			console.log(
				pokemon1.HP,
				pokemon2.HP,
				'Player ones turn:',
				oneIsNext,
				pointsPlayer1,
				pointsPlayer2
			)
			if (pokemon1.HP <= 0) {
				console.log('Player1 pokemon dies')
				setI(i + 1)
				if (i < 4) {
					setPokemon1(player1[i].base)
				} else {
					console.log('player1 is dead!')
					setAlive(false)
				}
			}
		}
	}

	return (
		<>
			<div className='left'>
				<h3>You</h3>
				<ul className='no-bullets'>
					<li>Current Pokemon: {player1[i].name.english}</li>
					<li>HP: {pokemon1.HP}</li>
					<li>Score: {pointsPlayer1}</li>
				</ul>
				<button onClick={hadleClick}>Attack</button>
			</div>
			<div className='middle'>
				<h3>FIGHT!</h3>
				<Spinner animation='grow' variant='warning' className='spinner' />
			</div>
			<div className='right'>
				<h3>Opponent</h3>'
				<ul className='no-bullets'>
					<li>Current Pokemon: {player2[j].name.english}</li>
					<li>HP: {pokemon2.HP}</li>
					<li>Score: {pointsPlayer2}</li>
				</ul>
			</div>
		</>
	)
}
