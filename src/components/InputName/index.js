import { useJogoDaMemoria } from "@/context/JogoDaMemoriaContext"
import styles from "@/styles/InputName/InputName.module.css"

export default function InputName() {

  const { player, setPlayer } = useJogoDaMemoria();

  return (
    <div className={styles.formName}>
      <label>Digite seu nick</label>
      <input
        type="text"
        value={player}
        onChange={(e) => setPlayer(e.target.value)}
        maxLength="14"
      />
    </div>
  )
}