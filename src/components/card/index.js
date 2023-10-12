import React, { useState, useEffect } from 'react';
import styles from "@/styles/card/card.module.css";
import { getImagePath } from '../GetImgPath';
import { useJogoDaMemoria } from '@/context/JogoDaMemoriaContext';
import Image from 'next/image';

const Card = ({ character, isRevealed, index }) => {
  const { currentTheme, handleCardClick, difficulty } = useJogoDaMemoria();
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(isRevealed);
  }, [isRevealed]);

  return (
    <div className={`${difficulty != 16 ? styles.card : styles.cardHard} ${flipped ? styles.revealcard : ''}`} onClick={() => handleCardClick(index)}>
      <Image src={getImagePath(flipped, character, currentTheme)} alt={character} width={500} height={500} />
    </div>
  );
}

export default Card;


