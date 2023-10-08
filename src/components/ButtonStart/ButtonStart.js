import Link from "next/link";
import styles from "@/styles/ButtonStart/ButtonStart.module.css";
import { useJogoDaMemoria } from "@/context/JogoDaMemoriaContext";

export default function ButtonStart() {

  const { resetGame, setGameStarted, currentTheme, player, difficulty } = useJogoDaMemoria();
  const isDisabled = !currentTheme || !player || difficulty == 0;

  return (
    <Link href="/jogodamemoria">
      <button
        className={styles.button}
        onClick={() => {
          if (!isDisabled) {
            resetGame();
            setGameStarted(true);
          }
        }}
        disabled={isDisabled}
      >
        Iniciar jogo
      </button>
    </Link>
  );
}
