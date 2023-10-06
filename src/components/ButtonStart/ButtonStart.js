import Link from "next/link";
import styles from "@/styles/ButtonStart/ButtonStart.module.css"


export default function ButtonStart({resetGame,setGameStarted,currentTheme,player}){

    return (
        <Link href="/jogodamemoria">
        <button
          className={styles.button}
          onClick={() => {
            resetGame();
            setGameStarted(true); 
          }}
          disabled={!currentTheme || !player}
        >
          Iniciar jogo
        </button>
      </Link>
    )
        }