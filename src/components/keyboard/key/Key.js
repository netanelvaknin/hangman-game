import React, {useState, useEffect} from "react";
import styled from "styled-components/macro";

const KeyStyle = styled.button`
  width: calc(100% / 7);
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({disabled}) => disabled ? 'normal' : 'pointer'};
  margin: 2px;
  font-weight: bold;
  font-size: 1.6rem;
  background: ${({disabled}) => disabled ? '#bdc3c7' : '#f39c12'};
  color: white;
  outline: none;
  border: 0;
`;

export const Key = ({ guessLetter, keyLetter, gameEnd }) => {
  const [isDisabled, setDisabled] = useState(false);

  const handleClick = () => {
    guessLetter(keyLetter);
    setDisabled(true);
  }

  useEffect(() => {
    if (gameEnd) {
      setDisabled(false);
    }
  }, [gameEnd]);

  return (
    <KeyStyle onClick={handleClick} disabled={isDisabled}>{keyLetter}</KeyStyle>
  );
};

export default Key;