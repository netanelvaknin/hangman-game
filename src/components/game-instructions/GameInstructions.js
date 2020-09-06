import React, { useState } from "react";
import { Popper, Button, Paper, makeStyles } from "@material-ui/core";
import styled from 'styled-components/macro';

const PaperStyle = styled(Paper)`
    width: 24rem;
    height: 9rem;
    padding: 1rem;
    font-size: 1.3rem;
    line-height: 1.4;
`;

const useStyles = makeStyles({
    root: {
        fontSize: '1.8rem',
        fontWeight: 'bold'
    }
});

const CloseButton = styled.button`
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    background: transparent;
    outline: none;
    border: 0;
    cursor: pointer;
`;

const GameInstructions = () => {
  const classes = useStyles();  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const close = () =>{
      setAnchorEl(false);
  }

  return (
    <>
      <Button classes={{root: classes.root}} onClick={handleClick}>HOW TO PLAY ?</Button>
      <Popper open={open} transition>
        <PaperStyle>
          Here is a secret word, click on the letters Try to find out the secret
          word before executing the man

        <CloseButton onClick={close}>CLOSE</CloseButton>
        </PaperStyle>
      </Popper>
    </>
  );
};

export default GameInstructions;
