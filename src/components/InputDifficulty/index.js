import React, { useEffect } from "react";
import styles from "@/styles/InputDifficulty/InputDifficulty.module.css";
import DifficultyBlock from "@/components/DifficultyBlock/index";
import { useJogoDaMemoria } from "@/context/JogoDaMemoriaContext";

export default function InputDifficulty() {

  const {setDifficulty, difficulty, currentTheme} =useJogoDaMemoria();
  const HideDifficultOption = ["jujutsu","attack on titan"].includes(currentTheme);
  
  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

 return (
    <div className={styles.containerDifficulty}>
      <DifficultyBlock
        value="6"
        checked={difficulty === "6"}
        onChange={handleDifficultyChange}
        label="Fácil"
      />

      <DifficultyBlock
        value="9"
        checked={difficulty === "9"}
        onChange={handleDifficultyChange}
        label="Médio"
      />

      {!HideDifficultOption && (
        <DifficultyBlock
          value="16"
          checked={difficulty === "16"}
          onChange={handleDifficultyChange}
          label="Difícil"
        />
      )}
    </div>
  );
}
