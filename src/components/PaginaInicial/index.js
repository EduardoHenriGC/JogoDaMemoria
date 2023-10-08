import styles from "@/styles/PaginaInicial/paginaInicial.module.css";
import DropDownTheme from "../DropdownTheme";
import InputName from "../InputName";
import ButtonStart from "../ButtonStart/ButtonStart";
import InputDifficulty from "../InputDifficulty";

export default function PaginaInicial() {

  return (
    <div className={styles.container}>
      <span className={styles.span} data-text="Jogo da Memoria">Jogo da Memoria</span>
      <InputName />
      <DropDownTheme />
      <InputDifficulty />
      <ButtonStart />
    </div>
  );
}
