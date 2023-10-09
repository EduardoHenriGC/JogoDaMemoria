import { useJogoDaMemoria } from "@/context/JogoDaMemoriaContext"
import Card from "../card";
import styles from "@/styles/Cards/Cards.module.css"

export default function Cards() {

  const { cards, difficulty } = useJogoDaMemoria();

  return (
    <div className={difficulty != 16 ? styles.grid : styles.gridHard}>
      {cards.map((card, index) => (
        <Card
          key={index}
          index={index}
          character={card.character}
          isRevealed={card.isRevealed}
        />
      ))}
    </div>
  )
}