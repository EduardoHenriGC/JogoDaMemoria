import React from "react";
import styles from "@/styles/InputDifficulty/InputDifficulty.module.css";

function DifficultyBlock({ value, checked, onChange, label }) {
  return (
    <div className={styles.inputRadioContent}>
      <input
        type="radio"
        name="difficulty"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <p>{label}</p>
    </div>
  );
}

export default DifficultyBlock;
