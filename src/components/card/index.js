import React, { useState, useEffect } from 'react';
import styles from "@/styles/card/card.module.css";

const Card = ({ character, currentTheme, isRevealed, isMatched, onClick, difficulty }) => {
  const [flipped, setFlipped] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setFlipped(isRevealed);
  }, [isRevealed]);

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

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`${difficulty !== 16 ? styles.card : styles.cardHard} ${flipped ? styles.revealcard : ''}`} onClick={onClick}>
      <img
        src={getImagePath()}
        alt={character}
        style={{ display: imageLoaded ? 'block' : 'none' }}
        onLoad={handleImageLoad}
      />
    </div>
  );
}

export default Card;
