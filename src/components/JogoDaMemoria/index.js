import React from 'react';
import Card from '@/components/card/index';
import styles from "@/styles/JogoDaMemoria/JogoDaMemoria.module.css"
import { useJogoDaMemoria } from '@/context/JogoDaMemoriaContext';
import Link from 'next/link';


const Game = () => {

const {cards,timer, player,handleCardClick,gameOver,finalTime,currentTheme} = useJogoDaMemoria();
  

  

return (
  <div>
    {gameOver ? (
      <div className={styles.endgame}>
        <h2>Fim de Jogo !!!</h2>
        <p>Tempo total: {finalTime} segundos</p>
        <Link href="/">Voltar</Link>
      </div>
    ) : (
      <div className={styles.container}>
        <h1>Jogo da Memória</h1>
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
        <p>Jogador: {player}</p>
        <p>Tempo: {timer} segundos</p>
      </div>
    )}
  </div>
);
 }

export default Game;
