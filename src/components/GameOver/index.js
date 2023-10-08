import Link from "next/link"
import styles from "@/styles/GameOver/GameOver.module.css"
import { useJogoDaMemoria } from "@/context/JogoDaMemoriaContext";

export default function GameOver() {

  const { finalTime, resetGame, showButtons } = useJogoDaMemoria();

  return (
    <div className={styles.endgame}>
      <h2>Fim de Jogo !!!</h2>
      <p>Tempo: <span>{finalTime} segundos</span></p>
      {showButtons && ( // Renderiza os botões apenas quando showButtons for verdadeiro
        <>
          <Link href="/">Voltar</Link>
          <button onClick={() => resetGame()}>Jogar novamente</button>
        </>
      )}
    </div>
  )
}