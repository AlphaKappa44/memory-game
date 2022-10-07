import { useState } from 'react';
import './App.css';

const cardImages = [
  {"src" : "/img/bisouVolant.webp"},
  {"src" : "/img/etBim.webp"},
  {"src" : "/img/genie.webp"},
  {"src" : "/img/onFire.webp"},
  {"src" : "/img/runPizza.webp"},
  {"src" : "/img/star.webp"}
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
      <p>♠️♦️♣️♥️</p>
      <button onClick={shuffleCards}> ▶️ CLICK &gt; {'>'} New Game 🟢</button>
      <div className='card-grid'> 
        {cards.map(card => (
          <div className='card' key={card.id}>
            <div>
              <img className='front' src={card.src} alt="card front" />
              <img className='back' src="/img/supporter.webp" alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
