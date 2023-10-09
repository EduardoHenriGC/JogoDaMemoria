import React, { createContext, useContext, useState, useEffect } from 'react';
import { getThemeCharacters } from '@/components/GetTheme/index';

// Cria um contexto para o jogo da memória
const JogoDaMemoriaContext = createContext();

export const JogoDaMemoriaProvider = ({ children }) => {
  // Estados do jogo
  const [currentTheme, setCurrentTheme] = useState(""); // Defina um tema inicial
  const [cards, setCards] = useState([]); // Cartas no jogo
  const [player, setPlayer] = useState(""); //estado para gerenciar o nome do jogador
  const [flippedCards, setFlippedCards] = useState([]); // Cartas viradas
  const [timer, setTimer] = useState(0); // Contagem de tempo
  const [gameOver, setGameOver] = useState(false); // Sinaliza o fim do jogo
  const [finalTime, setFinalTime] = useState(0); // Tempo final do jogo
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const [showButtons, setShowButtons] = useState(false); // Estado para controlar a exibição dos botões

  useEffect(() => {
    if (gameOver) {
      // Quando gameOver for verdadeiro, aguarde 3 segundos antes de mostrar os botões
      const timeout = setTimeout(() => {
        setShowButtons(true);
      }, 3000);
      return () => clearTimeout(timeout); // Limpa o timeout se o componente for desmontado
    } else {
      // Se o jogo não estiver no estado de game over, certifique-se de ocultar os botões
      setShowButtons(false);
    }
  }, [gameOver]);

  // Efeito para reiniciar o jogo quando o tema é alterado
  useEffect(() => {
    resetGame();
    setDifficulty(0);
  }, [currentTheme]);

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

  // Função para criar cartas embaralhadas com base no tema atual
  const createShuffledCards = () => {
    const themeCharacters = getThemeCharacters(currentTheme);
    const shuffledCharacters = themeCharacters.sort(() => Math.random() - 0.5).slice(0, difficulty);
    const duplicateCharacters = [...shuffledCharacters, ...shuffledCharacters];
    return duplicateCharacters.sort(() => Math.random() - 0.5).map((character, index) => {
      const cardObject = { character, isRevealed: false, isMatched: false, index };
      return cardObject;
    });
  };

  // Função para reiniciar o tabuleiro
  const resetBoard = () => {
    setFlippedCards([]);

  };

  // Função para lidar com o clique em uma carta
  const handleCardClick = (index) => {
    if (cards[index].isRevealed) return;
    if (!cards[index].isRevealed && flippedCards.length < 2) {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        newCards[index].isRevealed = true;
        return newCards;
      });
      setFlippedCards([...flippedCards, index]);
    }

    if (flippedCards.length === 1) {
      const [firstIndex] = flippedCards;
      if (cards[index] === cards[firstIndex]) return
      if (cards[firstIndex].character === cards[index].character) {
        setCards((prevCards) => {
          const newCards = [...prevCards];
          newCards[firstIndex].isMatched = true;
          newCards[index].isMatched = true;
          return newCards;
        });
        resetBoard();
      } else {
        setTimeout(() => {
          setCards((prevCards) => {
            const newCards = [...prevCards];
            newCards[firstIndex].isRevealed = false;
            newCards[index].isRevealed = false;
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
    setGameOver(false);
    setFinalTime(0);

  };
  // Objeto de contexto que será fornecido aos componentes filhos
  const contextValue = {
    cards,
    player,
    currentTheme,
    timer,
    difficulty,
    showButtons,
    gameOver,
    finalTime,
    setGameStarted,
    setDifficulty,
    handleCardClick,
    resetGame,
    setCurrentTheme,
    setPlayer
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