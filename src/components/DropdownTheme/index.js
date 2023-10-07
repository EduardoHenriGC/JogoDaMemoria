import styles from "@/styles/DropDownTheme/DropDownTheme.module.css"


export default function DropDownTheme({currentTheme,setCurrentTheme}){


    return (  
    
    <div className={styles.formTheme}>
        <label>Escolha o tema</label>
        <select
          value={currentTheme}
          onChange={(e) => setCurrentTheme(e.target.value)}
        >
          <option value="">Selecione um tema</option>
          
          <option value="onepiece">One Piece</option>
          <option value="jujutsu">Jujutsu Kaisen</option>
          <option value="attack on titan">Attack on Titan</option>
          <option value="naruto">Naruto</option>
          <option value="bleach">Bleach</option>
          <option value="mix">Diversos</option>
          <option value="all">Todos</option>
        </select>
      </div>
)
}