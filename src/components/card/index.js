import React, { useState, useEffect } from 'react';
import styles from "@/styles/card/card.module.css";
import { getImagePath } from '../GetImgPath';

const Card = ({ character,currentTheme, isRevealed, isMatched, onClick,difficulty }) => {
  const [flipped, setFlipped] = useState(false);
  

  useEffect(() => {
    setFlipped(isRevealed);
  }, [isRevealed]);

  
return (
   
     
    <div className={`${difficulty !=16 ? styles.card : styles.cardHard} ${flipped ? styles.revealcard : ''}`} onClick={onClick}>
      <img src={getImagePath(isMatched,flipped,character,currentTheme)} alt={character} />
     
    </div>
   
  );
}

export default Card;


