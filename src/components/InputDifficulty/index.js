import React, { useEffect } from "react";
import styles from "@/styles/InputDifficulty/InputDifficulty.module.css";
import DifficultyBlock from "@/components/DifficultyBlock/index";

export default function InputDifficulty({ setDifficulty, difficulty, currentTheme }) {
  
  const shouldHideDifficultOption = ["bleach", "mix", "all"].includes(currentTheme);
  
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

      {shouldHideDifficultOption && (
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
