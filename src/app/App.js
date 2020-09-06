import React, { useState } from "react";
import { randomWord } from "../words";

// Components
import HangmanImage from "../components/hangman-image/HangmanImage";
import Keyboard from "../components/keyboard/Keyboard";
import LettersPreview from "../components/keyboard/letters-preview/LettersPreview";
import GameStatusModal from "../components/game-status-modal/GameStatusModal";
import GameInstructions from "../components/game-instructions/GameInstructions";

// Short sound clips
import lost from "../assets/lost.mp3";
import win from "../assets/win.mp3";
import right from "../assets/right.mp3";

// Styled
import GameWrapper from "./AppStyle";

const App = () => {
  const [secretWord, setSecretWord] = useState(randomWord().split(""));
  const [hiddenWord, setHiddenWord] = useState(secretWord.map((l) => "●"));
  const [errorNumber, setErrorNumber] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const [gameStatusText, setGameStatusText] = useState("");

  const checkWin = () => {
    if (!hiddenWord.includes("●")) {
      new Audio(win).play();
      window.navigator.vibrate(700);
      setGameStatusText("GREAT! YOU WIN!");
      setGameEnd(true);
    }
  };

  const checkLose = () => {
    if (errorNumber < 6) {
      setErrorNumber(errorNumber + 1);
    } else {
      new Audio(lost).play();
      window.navigator.vibrate(700);
      setGameStatusText("YOU LOSE THE GAME. LETS TRY AGAIN");
      setGameEnd(true);
    }
  };

  const guessLetter = (key) => {
    let occurrences = [];
    const letter = key.toLowerCase();

    if (secretWord.includes(letter)) {
      new Audio(right).play();
      window.navigator.vibrate(200);

      // search for letter positions
      for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === letter) occurrences.push(i);
      }

      if (occurrences.length > 0) {
        occurrences.forEach((index) => {
          const hiddenWordCopy = hiddenWord;
          hiddenWordCopy[index] = letter;
          setHiddenWord([...hiddenWordCopy]);
        });
      }

      checkWin();
    } else {
      checkLose();
    }
  };

  const resetGame = () => {
    setErrorNumber(0);
    setSecretWord(randomWord().split(""));
    setHiddenWord(secretWord.map((l) => "●"));
    setGameEnd(false);
  };

  return (
    <>
      <GameInstructions />
      
      <GameWrapper>
        <HangmanImage errors={errorNumber} />

        <div style={{ margin: "2rem" }}>
          <LettersPreview secretWord={hiddenWord} />
          <Keyboard guessLetter={guessLetter} gameEnd={gameEnd} />
        </div>
      </GameWrapper>

      <GameStatusModal
        gameStatus={gameEnd}
        gameStatusText={gameStatusText}
        resetGame={resetGame}
      />
    </>
  );
};

export default App;
