import './SingleCard.css'

function SingleCard({ card, handleChoice }) {

    const handleClick = () => {
        // console.log(event.target)
        // console.log(handleChoice)
        handleChoice(card)
        // console.log(handleChoice(card))
    };
    
    return (
        <div className='card' >
        <div>
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