import './SingleCard.css'

function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        // Only if cards are disabled the choice will be handled
        if (!disabled) {
        // console.log(event.target)
        // console.log(handleChoice)
        handleChoice(card)
        // console.log(handleChoice(card))
        }
    };
    
    return (
        <div className='card' >
            {/* if flipped is true we apply the class; nothing if false */}
        <div className= {flipped? "flipped" : ""}>
          <img className='front' src={card.src} alt="card front" />
          <img 
            onClick={handleClick} 
            className='back' 
            src="/img/supporter.webp" 
            alt="card back" 
            />
        </div>
      </div>
    );
}

export default SingleCard;