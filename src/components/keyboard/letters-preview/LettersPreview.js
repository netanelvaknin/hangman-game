import React, {useState, useEffect} from "react";
import styled from "styled-components/macro";

const LetterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 1rem;
`;

const Letter = styled.div`
  width: 4rem;
  border-bottom: 2px solid #ecf0f1;
  font-size: 4rem;
  color: #ecf0f1;
`;

const LettersPreview = ({ secretWord }) => {
  const [word, setWord] = useState(secretWord);
  
  useEffect(() => {
    setWord(secretWord);
  }, [secretWord]);

  return (
    <LetterContainer>
      {word.map((letter, ind) => <Letter key={ind}>{letter}</Letter>)}
    </LetterContainer>
  );
};

export default LettersPreview;