import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
	{ src: "/img/bisouVolant.webp", matched : false },
	{ src: "/img/etBim.webp", matched : false },
	{ src: "/img/genie.webp", matched : false },
	{ src: "/img/onFire.webp", matched : false },
	{ src: "/img/runPizza.webp", matched : false },
	{ src: "/img/star.webp", matched : false },
];

function App() {
	// Create a state with an empty array by default
	const [cards, setCards] = useState([]);
	// Create a state for the number of turns
	const [turns, setTurns] = useState(0);
	// Create 2 states for 2 choices that the user is going to make
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	// State for cards to be disabled when waiting for card chosen to be flipped
	const [disabled, setDisabled] = useState(false);

	// 1-Duplicate each card once = 12 cards
	// 2-Randomize the order of the cards
	// 3-Give them a kez

	const shuffleCards = () => {
		// Duplicate the array once ... and twice
		const shuffleCards = [...cardImages, ...cardImages]
		// Mix images with the sort() method
		.sort(() => Math.random() - 0.5)
		.map((card) => ({ ...card, id: Math.random() }));

		// set a new state with the randomized cards array
		setCards(shuffleCards);
		// Reset turns to 0 for a new Game
		setTurns(0);
	};

	// console.log(cards, turns)

	// Handle a choice
	const handleChoice = (card) => {
		// console.log(card)

		// We check the state of choice 1, if true we set choice 2, if false, we set choice 1
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
		// Do not compare choices here because the state won't be updated yet
		// useEffect is the solution
	};

	// Compare 2 selected cards
	useEffect(() => {
		// if we have 2 states to compare with
		if (choiceOne && choiceTwo) {
			// Until the check is done after click, cards are disabled
			setDisabled(true);

			// if both image sources are the same
			if (choiceOne.src === choiceTwo.src) {
				 console.log('Those 2 cards are THE SAME')
				// We can setCards identical to match = true
				setCards(prevcards => {
					return prevcards.map((card) => {
						if (card.src === choiceOne.src) {
							return {...card, matched: true}
							
					} else { 
						return card
					}
					})
				})

				resetTurn()
				 console.log("Turn was just reset")
			// Else if images are differents
			} else {
				 console.log('Those 2 cards are DIFFERENTS')
				 setTimeout(() => resetTurn(), 1500)
				
				 console.log("Turn was just reset")
			}
		}
	}, [choiceOne, choiceTwo])

	// Check the new cards with matched properties on "true"
	console.log(cards)

	// Reset choices and increase turn
	const resetTurn = () => {
		setChoiceOne(null)
		setChoiceTwo(null)
		setTurns(prevTurns => prevTurns+1)
		// Cards can be active again
		setDisabled(false)
	}

	// Start a new game automatically
	// Second useEffect because nothing to do with the choice of the card
	useEffect(() => {
		shuffleCards()
	}, [])

	return (
		<div className="App">
		<h1>MEMORY GAME</h1>
		<p>♠️♦️♣️♥️</p>
		<button onClick={shuffleCards}> ▶️ CLICK &gt; {">"} New Game 🟢</button>

		<div className="card-grid">
			{cards.map((card) => (
			<SingleCard
				// handleChoice prop is equal to the handleChoice function
				handleChoice={handleChoice}
				key={card.id}
				card={card}
				// 3 cases when a card should be flipped
				flipped= {card === choiceOne || card === choiceTwo || card.matched}
				disabled={disabled}
			/>
			))}
		</div>
		<p>Number of tries : {turns}</p>
		</div>
	);
}

export default App;
