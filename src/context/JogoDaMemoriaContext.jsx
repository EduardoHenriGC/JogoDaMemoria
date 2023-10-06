import React, { createContext, useContext, useState, useEffect } from 'react';
import { getThemeCharacters } from '@/components/GetTheme/index';
// Cria um contexto para o jogo da memória
const JogoDaMemoriaContext = createContext();

export const JogoDaMemoriaProvider = ({ children }) => {
  // Estados do jogo
  const [currentTheme, setCurrentTheme] = useState(''); // Defina um tema inicial
  const [cards, setCards] = useState([]); // Cartas no jogo
  const [player, setPlayer] = useState("");
  const [flippedCards, setFlippedCards] = useState([]); // Cartas viradas
  const [timer, setTimer] = useState(0); // Contagem de tempo
  const [lockBoard, setLockBoard] = useState(false); // Bloqueio de cliques nas cartas
  const [gameOver, setGameOver] = useState(false); // Sinaliza o fim do jogo
  const [finalTime, setFinalTime] = useState(0); // Tempo final do jogo
  const [gameStarted, setGameStarted] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  

  // Função para criar cartas embaralhadas com base no tema atual
  const createShuffledCards = () => {
    const themeCharacters = getThemeCharacters(currentTheme);
    const shuffledCharacters = themeCharacters.sort(() => Math.random() - 0.5).slice(0, 2);
    const duplicateCharacters = [...shuffledCharacters, ...shuffledCharacters];
  
    return duplicateCharacters.sort(() => Math.random() - 0.5).map((character, index) => {
      return { character, isRevealed: false, isMatched: false, index };
    });
  };
  
// Efeito para reiniciar o jogo quando o tema é alterado
  useEffect(() => {
    resetGame();
  }, [currentTheme]);

  useEffect(() => {
    const themeCharacters = getThemeCharacters(currentTheme);
    const imagePromises = themeCharacters.map((character) => {
      return new Promise((resolve) => {
        const image = new Image();
        image.src = character.imageSrc; // Substitua 'imageSrc' pelo caminho da imagem do personagem
        image.onload = () => resolve();
      });
    });
  
    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, [currentTheme, gameStarted]);
  

  // Efeito para verificar se todas as cartas estão combinadas e definir o fim do jogo
  useEffect(() => {
    if (gameStarted && cards.every((card) => card.isMatched)) {
      setFinalTime(timer - 3);
      setTimeout(() => {
        setGameOver(true);
      }, 3000); // 3000 milissegundos = 3 segundos
    }
  }, [cards, timer, gameStarted]);
  
  // Efeito para atualizar o cronômetro
  useEffect(() => {
    let interval;

    if (!gameOver) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [gameOver]);

  // Função para reiniciar o tabuleiro
  const resetBoard = () => {
    setFlippedCards([]);
    setLockBoard(false);
  };
  
 
  // Função para lidar com o clique em uma carta
  const handleCardClick = (index) => {
    if (lockBoard) return;

    if (!cards[index].isRevealed && flippedCards.length < 2) {
      setCards((prevCards) => {
        console.log("click",flippedCards.length)
        const newCards = [...prevCards];
        newCards[index].isRevealed = true;
        return newCards;
      });
      setFlippedCards([...flippedCards, index]);
    }

    if (flippedCards.length === 1) {
      const [firstIndex] = flippedCards;
      if (cards[firstIndex].character === cards[index].character) {
        setCards((prevCards) => {
          const newCards = [...prevCards];
          newCards[firstIndex].isMatched = true;
          newCards[index].isMatched = true;
          console.log("match",cards[firstIndex].character, cards[index].character)
          return newCards;
        });
        resetBoard();
      } else {
        setLockBoard(true);
        setTimeout(() => {
          setCards((prevCards) => {
            const newCards = [...prevCards];
            newCards[firstIndex].isRevealed = false;
            newCards[index].isRevealed = false;
            console.log("not match",cards[firstIndex].character, cards[index].character)
            return newCards;
          });
          resetBoard();
        }, 650); // Tempo de espera antes de virar as cartas de volta (850 milissegundos)
      }
    }
  }
 

    // Função para reiniciar o jogo
    const resetGame = () => {
      setCards(createShuffledCards());
      setFlippedCards([]);
      setTimer(0);
      setLockBoard(false);
      setGameOver(false);
      setFinalTime(0);
      
    };
  
    if (!imagesLoaded) {
      return null; // Renderizar nulo enquanto as imagens estão sendo carregadas
    }
   
  // Objeto de contexto que será fornecido aos componentes filhos
  const contextValue = {
    cards,
    player,
    setPlayer,
    
    currentTheme,
    setCurrentTheme,
    timer,
    handleCardClick,
    resetGame,
    gameOver,
    finalTime,
    setGameStarted
   
  };

  // Fornece o contexto aos componentes filhos
  return (
    <JogoDaMemoriaContext.Provider value={contextValue}>
      {children}
    </JogoDaMemoriaContext.Provider>
  );
};

// Hook personalizado para acessar o contexto
export const useJogoDaMemoria = () => {
  return useContext(JogoDaMemoriaContext);
};