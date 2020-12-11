import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import PlayingCard from './PlayingCard'
import './Game.css'

export default function Game(props) {
	/* 	var player1 = []
	var player2 = []
	const createPokemon = () => {
		for (let a = 0; a < 5; a++) {
			var index1 = Math.floor(Math.random() * 810)
			var index2 = Math.floor(Math.random() * 810)
			player1.push(props.pokemons[index1])
			player2.push(props.pokemons[index2])
		}
	}
	useEffect(() => {
		createPokemon()
	}, []) */

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

	let [gameCondition, setGameCondition] = useState('start')

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
			setGameCondition('computerAttack')
			computerAttack()
		} else if (!alive) {
			setGameCondition('dead')
			setPokemon1(player1[0].base)
		}
	}, [oneIsNext])

	const hadleClick = () => {
		if (oneIsNext && alive) {
			setGameCondition('player1Attack')
			playerOneAttack()
		} else {
			alert('Wait for your turn!')
		}
	}

	const playerOneAttack = () => {
		setTimeout(() => {
			console.log('player one is attackig!')

			pokemon2.HP =
				pokemon2.HP - Math.floor((pokemon2.Defense / 100) * pokemon1.Attack)

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
				if (j >= 4) {
					setAlive(false)
					setGameCondition('computerdead')
					setJ(0)

					setOneIsNext(true)
				} else {
					setJ(j + 1)
					setOneIsNext(false)
					setGameCondition('player1Next')
					setPokemon2(player2[j].base)
					whoIsFirst()
				}
				setPokemon2(player2[j].base)
			} else {
				setGameCondition('player1Next')
				setOneIsNext(false)
			}
		}, 1000)
	}
	const computerAttack = () => {
		setTimeout(() => {
			if (alive) {
				console.log('computer is attackig!')

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
					if (i >= 4) {
						setAlive(false)
						setGameCondition('player1dead')
						setI(0)

						setOneIsNext(true)
					} else {
						setI(i + 1)
						setOneIsNext(true)
						setGameCondition('player1Next')
						setPokemon1(player1[i].base)
					}
					setPokemon1(player1[i].base)
				} else {
					setGameCondition('player1Next')
					setOneIsNext(true)
				}
			}
		}, 1000)
	}

	const conditionSwitch = () => {
		switch (gameCondition) {
			case 'start':
				return (
					<>
						<p>New Game!</p>
						<p>
							{oneIsNext ? player1[i].name.english : player2[j].name.english}{' '}
							attacks first.
						</p>
					</>
				)
			case 'player1Attack':
				return (
					<>
						<p>{player1[i].name.english} attacks!</p>
						<Spinner animation='grow' variant='danger' className='spinner' />
					</>
				)

			case 'computerAttack':
				return (
					<>
						<p>{player2[j].name.english} attacks!</p>
						<Spinner animation='grow' variant='warning' className='spinner' />
					</>
				)
			case 'player1Next':
				return (
					<>
						<p>{player1[i].name.english} attacks next!</p>
					</>
				)
			case 'player1dead':
				return (
					<>
						<p>Your Opponent won the game.</p>
					</>
				)
			case 'computerdead':
				return (
					<>
						<p>You won the game.</p>
					</>
				)
			default:
				return <p className='p'>"something went very very wrong..."</p>
		}
	}

	return (
		<div className='wrapper'>
			<Container fluid>
				<Row>
					<Col>
						<h3>Your Cards</h3>
					</Col>
					<Col></Col>
					<Col>
						<h3>Opponent's Cards</h3>
					</Col>
				</Row>
				<Row>
					<Col>
						<PlayingCard
							id={player1[i].id}
							hp={pokemon1.HP}
							attack={pokemon1.Attack}
							defense={pokemon1.Defense}
							name={player1[i].name.english}
						/>
					</Col>
					<Col>{conditionSwitch()}</Col>
					<Col>
						<PlayingCard
							id={player2[j].id}
							hp={pokemon2.HP}
							attack={pokemon2.Attack}
							defense={pokemon2.Defense}
							name={player2[j].name.english}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<h5>Your Score: {pointsPlayer1}</h5>
					</Col>
					<Col className='cardtitle'>
						<button onClick={hadleClick}>Attack</button>
					</Col>
					<Col>
						<h5> Opponent's Score: {pointsPlayer2}</h5>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
