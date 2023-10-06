import React, { useState, useEffect } from 'react';
import Card from '@/components/card/index';
import styles from "@/styles/JogoDaMemoria/JogoDaMemoria.module.css"
import { useJogoDaMemoria } from '@/context/JogoDaMemoriaContext';
import GameOver from '../GameOver';

const Game = () => {
  const { resetGame, cards, timer, player, handleCardClick, gameOver, finalTime, currentTheme } = useJogoDaMemoria();
  

  return (
    <div>
      {gameOver ? <GameOver gameOver={gameOver} finalTime={finalTime} resetGame={resetGame}/>
       : (
        <div className={styles.container}>
          <h1>Jogo da Memória</h1>
          <div className={styles.infoContent}>
         <p>Jogador: <span>{player}</span></p>
          <p>Tempo: <span>{timer} segundos</span></p>
         </div>
          <div className={styles.grid}>
            {cards.map((card, index) => (
              <Card
                key={index}
                currentTheme={currentTheme}
                character={card.character}
                isRevealed={card.isRevealed}
                isMatched={card.isMatched}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
       
        </div>
      )}
    </div>
  );
}

export default Game;
