import React, { useState, useEffect } from 'react';
import Card from '@/components/card/index';
import styles from "@/styles/JogoDaMemoria/JogoDaMemoria.module.css"
import { useJogoDaMemoria } from '@/context/JogoDaMemoriaContext';
import Link from 'next/link';

const Game = () => {
  const { resetGame, cards, timer, player, handleCardClick, gameOver, finalTime, currentTheme } = useJogoDaMemoria();
  const [showButtons, setShowButtons] = useState(false); // Estado para controlar a exibição dos botões

  useEffect(() => {
    if (gameOver) {
      // Quando gameOver for verdadeiro, aguarde 3 segundos antes de mostrar os botões
      const timeout = setTimeout(() => {
        setShowButtons(true);
      }, 3000);

      return () => clearTimeout(timeout); // Limpa o timeout se o componente for desmontado
    } else {
      // Se o jogo não estiver no estado de game over, certifique-se de ocultar os botões
      setShowButtons(false);
    }
  }, [gameOver]);

  return (
    <div>
      {gameOver ? (
        <div className={styles.endgame}>
          <h2>Fim de Jogo !!!</h2>
          <p>Tempo total: {finalTime} segundos</p>
          {showButtons && ( // Renderiza os botões apenas quando showButtons for verdadeiro
            <>
              <Link href="/" onClick={() => resetGame()}>Voltar</Link>
              <button onClick={() => resetGame()}>Jogar novamente</button>
            </>
          )}
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
