
import { useJogoDaMemoria } from "@/context/JogoDaMemoriaContext";
import styles from "@/styles/PaginaInicial/paginaInicial.module.css";
import DropDownTheme from "../DropdownTheme";
import InputName from "../InputName";
import ButtonStart from "../ButtonStart/ButtonStart";

export default function PaginaInicial() {
  const { setPlayer,player,setCurrentTheme,currentTheme,setGameStarted,resetGame } = useJogoDaMemoria();
  
  
return (
    <div className={styles.container}>

      <span className={styles.span} data-text="Jogo da Memoria">Jogo da Memoria</span>

     <InputName setPlayer={setPlayer} player={player}/>
     <DropDownTheme setCurrentTheme={setCurrentTheme} currentTheme={currentTheme}/>
     <ButtonStart setGameStarted={setGameStarted} resetGame={resetGame} currentTheme={currentTheme} player={player}/>

    </div>
  );
}
