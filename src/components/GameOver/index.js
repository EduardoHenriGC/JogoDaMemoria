import Link from "next/link"
import styles from "@/styles/GameOver/GameOver.module.css"
import { useState,useEffect } from "react";

export default function GameOver({gameOver,finalTime,resetGame}){

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
    
    <div className={styles.endgame}>
        <h2>Fim de Jogo !!!</h2>
        <p>Tempo: <span>{finalTime} segundos</span></p>
        {showButtons && ( // Renderiza os botões apenas quando showButtons for verdadeiro
          <>
            <Link href="/" onClick={() => resetGame()}>Voltar</Link>
            <button onClick={() => resetGame()}>Jogar novamente</button>
          </>
        )}
      </div>)
}