import styles from "@/styles/InputName/InputName.module.css"

export default function InputName({player, setPlayer}){

    return (

        <div className={styles.formName}>
        <label>Digite seu nick</label>
        <input
          type="text"
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
        />
      </div>
    )
}