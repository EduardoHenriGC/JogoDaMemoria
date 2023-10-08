import React from 'react';
import styles from "@/styles/JogoDaMemoria/JogoDaMemoria.module.css"
import { useJogoDaMemoria } from '@/context/JogoDaMemoriaContext';
import GameOver from '../GameOver';
import InfoGame from '../InfoGame';
import Cards from '../Cards';

const Game = () => {
  
  const {gameOver} = useJogoDaMemoria();
  

  return (
    <div>
      {gameOver ? <GameOver/>
       : (
        <div className={styles.container}>
          <InfoGame/>
          <Cards/>
       
        </div>
      )}
    </div>
  );
}

export default Game;
