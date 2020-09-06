import React from "react";
import styled from "styled-components/macro";
import Key from "./key/Key";
import keyboardKeys from "./keyboard-keys";

const KeyboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Keyboard = ({ guessLetter, word, gameEnd }) => {
  return (
    <KeyboardContainer>
      {keyboardKeys.map((key, index) => {
        return (
          <Key
            gameEnd={gameEnd}
            key={index}
            keyLetter={key}
            guessLetter={guessLetter}
            secretWord={word}
          />
        );
      })}
    </KeyboardContainer>
  );
};

export default Keyboard;