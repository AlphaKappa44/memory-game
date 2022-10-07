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

  // 1-Duplicate each card once = 12 cards
  // 2-Randomize the order of the cards 
  // 3-Give them a kez

  const shuffleCards = () => {
    // Duplicate the array once ... and twice
    const shuffleCards = [...cardImages, ...cardImages]
    // Mix images with the sort() method
    .sort(() => Math.random()-0.5)
    .map((card ) => ({...card, id: Math.random()}))

  }

  return (
    <div className="App">
      <h1>MEMORY GAME</h1>
      <button>&gt; {'>'} New Game</button>
    </div>
  );
}

export default App;
