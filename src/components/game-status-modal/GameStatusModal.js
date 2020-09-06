import React from "react";
import { Modal, Paper, Button, makeStyles } from "@material-ui/core";
import styled from "styled-components/macro";
import { mobile } from "../../utils/screen-sizes";

const useStyles = makeStyles({
  root: {
    background: "#f39c12",
    height: "5rem",
    width: "17rem",
    color: "white",
    fontSize: "1.8rem",
    "&:hover": {
      background: "#f39c12",
    },
  },
});

const ModalStyle = styled(Modal)`
  .MuiPaper-root {
    width: 65rem;
    height: 25rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;

    @media ${mobile} {
      width: 90%;
      height: 75%;
      padding: 0;
    }
  }
`;

const GameStatusText = styled.p`
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 0.4rem;
  text-align: center;
`;

const GameStatusModal = ({ gameStatus, gameStatusText, resetGame }) => {
  const classes = useStyles();

  return (
    <ModalStyle disableBackdropClick open={gameStatus}>
      <Paper>
        <GameStatusText>{gameStatusText}</GameStatusText>
        <Button
          classes={{ root: classes.root }}
          variant="contained"
          onClick={resetGame}
        >
          Play again!
        </Button>
      </Paper>
    </ModalStyle>
  );
};

export default GameStatusModal;