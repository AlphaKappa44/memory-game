import { useState } from 'react';
import './App.css';

const cardImages = [
  {"src" : "public/img/bisouVolant.webp"},
  {"src" : "public/img/etBim.webp"},
  {"src" : "public/img/genie.webp"},
  {"src" : "public/img/onFire.webp"},
  {"src" : "public/img/runPizza.webp"},
  {"src" : "public/img/star.webp"}
]

function App() {

  // Create a state with an emty array by default
  const [cards, setCards] = useState([])
  // Create a state for the number of turns
  const [turns, setTurns] = useState(0)

  // 1-Duplicate each card once = 12 cards
  // 2-Randomize the order of the cards 
  // 3-Give them a kez

  const shuffleCards = () => {
    // Duplicate the array once ... and twice
    const shuffleCards = [...cardImages, ...cardImages]
    // Mix images with the sort() method
    .sort(() => Math.random()-0.5)
    .map((card ) => ({...card, id: Math.random()}))

    // set a new state with the randomized cards array
    setCards(shuffleCards)
    // Reset turns to 0 for a new Game
    setTurns(0)

  }

  console.log(cards, turns)
  return (
    <div className="App">
      <h1>MEMORY GAME</h1>
      <button onClick={shuffleCards}> &gt; {'>'} New Game </button>
    </div>
  );
}

export default App;
