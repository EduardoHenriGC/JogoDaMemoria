import { useJogoDaMemoria } from "@/context/JogoDaMemoriaContext"
import Card from "../card";
import styles from "@/styles/Cards/Cards.module.css"

export default function Cards(){

    const {cards,difficulty,currentTheme,handleCardClick} =useJogoDaMemoria();

    return (

        <div className={difficulty != 16 ? styles.grid : styles.gridHard}>
            {cards.map((card, index) => (
              <Card
                key={index}
                difficulty={difficulty}
                currentTheme={currentTheme}
                character={card.character}
                isRevealed={card.isRevealed}
                isMatched={card.isMatched}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
    )
}