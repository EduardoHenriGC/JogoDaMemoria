import { useJogoDaMemoria } from "@/context/JogoDaMemoriaContext"
import styles from "@/styles/InfoGame/InfoGame.module.css"

export default function InfoGame(){

    const {player, timer} = useJogoDaMemoria();

    return (    
    <>
    <h1>Jogo da Memória</h1>
    <div className={styles.infoContent}>
   <p>Jogador: <span>{player}</span></p>
    <p>Tempo: <span>{timer} segundos</span></p>
   </div>
   </>)
}