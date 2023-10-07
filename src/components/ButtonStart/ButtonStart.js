import Link from "next/link";
import styles from "@/styles/ButtonStart/ButtonStart.module.css";

export default function ButtonStart({ resetGame, setGameStarted, currentTheme, player, difficulty }) {
  const isDisabled = !currentTheme || !player || difficulty ==0;

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
