import React, { useState, useEffect } from 'react';
import styles from "@/styles/card/card.module.css";

const Card = ({ character,currentTheme, isRevealed, isMatched, onClick }) => {
  const [flipped, setFlipped] = useState(false);
  

  useEffect(() => {
    setFlipped(isRevealed);
  }, [isRevealed]);

  const handleClick = () => {
    if (!flipped) {
      setFlipped(true);
      onClick();
    }
  };

  const getImagePath = () => {
    if (isMatched) {
      return `/images/${character}.jpg`;
    } else if (flipped) {
      return `/images/${character}.jpg`;
    } else {
      return `/images/${
        currentTheme === "bleach" ? "backbleach" :
        currentTheme === "jujutsu" ? "backjujutsu" :
        currentTheme === "attack on titan" ? "backattackontitan" :
        currentTheme === "naruto" ? "backnaruto" :
        currentTheme === "all" ? "backall" :
        currentTheme === "mix" ? "backmix" :
        "backonepiece"
      }.jpg`;
      
    }
  };

  return (
   
     
    <div className={`${styles.card} ${flipped ? styles.revealcard : ''}`} onClick={handleClick}>
      <img src={getImagePath()} alt={character} />
     
    </div>
   
  );
}

export default Card;
