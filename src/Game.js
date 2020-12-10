import React, { useState, useEffect } from 'react'

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
	let [i, SetI] = useState(0)
	let [j, SetJ] = useState(0)

	let [pokemon1, setPokemon1] = useState({
		HP: player1[0].base.HP,
		Attack: player1[0].base.Attack,
		Defense: player1[0].base.Defense,
		Speed: player1[0].base.Speed,
	})
	let [pokemon2, setPokemon2] = useState({
		HP: player2[0].base.HP,
		Attack: player2[0].base.Attack,
		Defense: player2[0].base.Defense,
		Speed: player2[0].base.Speed,
	})

	let [oneIsNext, setOneIsNext] = useState(false)
	let [pointsPlayer1, setPointsPlayer1] = useState(0)
	let [pointsPlayer2, setPointsPlayer2] = useState(0)

	useEffect(() => {
		console.log('new pokemon for user1')
		setPokemon1({
			HP: player1[i].base.HP,
			Attack: player1[i].base.Attack,
			Defense: player1[i].base.Defense,
			Speed: player1[i].base.Speed,
		})
		console.log(pokemon1)
	}, [i])

	useEffect(() => {
		console.log('new pokemon for computer')
		setPokemon2({
			HP: player2[j].base.HP,
			Attack: player2[j].base.Attack,
			Defense: player2[j].base.Defense,
			Speed: player2[j].base.Speed,
		})
	}, [j])

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
		if (!oneIsNext) {
			computerAttack()
		}
	}, [oneIsNext])

	const hadleClick = () => {
		if (oneIsNext) {
			playerOneAttack()
		} else {
			alert('Wait for your turn!')
		}
	}

	const playerOneAttack = () => {
		console.log('player one is attackig!')
		let newObject = { ...pokemon2 }
		newObject.HP = pokemon2.HP - (pokemon2.Defense / 100) * pokemon1.Attack
		setPokemon2(newObject)
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
			SetJ(j + 1)
		}
	}
	const computerAttack = () => {
		console.log('computer is attackig!')
		let newObject = { ...pokemon1 }
		newObject.HP = pokemon1.HP - (pokemon1.Defense / 100) * pokemon2.Attack
		setPokemon1(newObject)
		setOneIsNext(true)
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
			console.log('Computers pokemon dies')
			SetI(i + 1)
		}
	}

	return (
		<>
			<p>hp1: coming soon</p>
			<button onClick={hadleClick}>Attack</button>
			<p>hp2: coming soon</p>
		</>
	)
}
