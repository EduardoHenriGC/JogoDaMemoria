
import { useJogoDaMemoria } from "@/context/JogoDaMemoriaContext";
import styles from "@/styles/PaginaInicial/paginaInicial.module.css";
import Link from "next/link";

export default function PaginaInicial() {
  const { setPlayer, mudarTema,player,setCurrentTheme,currentTheme } = useJogoDaMemoria();
  
  
return (
    <div className={styles.container}>
      <div className={styles.formName}>
        <label>Digite seu nick</label>
        <input
          type="text"
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
        />
      </div>

      <div className={styles.formTheme}>
        <label>Escolha o tema</label>
        <select
          value={currentTheme}
          onChange={(e) => setCurrentTheme(e.target.value)}
        >
          <option value="">Selecione um tema</option>
          <option value="bleach">Bleach</option>
          <option value="onepiece">One Piece</option>
          <option value="jujutsu">Jujutsu Kaisen</option>
          <option value="attack on titan">Attack on Titan</option>
          <option value="naruto">Naruto</option>
          <option value="mix">Mix</option>
          <option value="all">All</option>
        </select>
      </div>

      

      <Link href="/jogodamemoria">
        <button
          className={styles.btn}
          onClick={() => mudarTema(currentTheme)}
          disabled={!currentTheme || !player}
        >
          Iniciar jogo
        </button>
      </Link>
    </div>
  );
}
