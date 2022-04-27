import {
  Container,
  Title,
  TitleContainer,
  Input,
  InputContainer,
  Label,
  Button,
  Select,
} from "./styles";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Custom from "./Custom";
import DataContext from "../../store/data-context";
import useGame from "../game/useGame";

const AddPlayer = () => {
  const { createTable } = useGame();
  const ctx = useContext(DataContext);

  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState("");
  const [gameMode, setGameMode] = useState("choose");

  const gameModeHandler = (event) => {
    setGameMode(event.target.value);
  };

  const AddPlayerHandler = (event) => {
    event.preventDefault();
    ctx.playerName = playerName;
    if (gameMode !== "custom") {
      const values = gameMode.split(",");
      ctx.rowNumber = values[0];
      ctx.columnNumber = values[1];
      ctx.mineNumber = values[2];
    }

    ctx.table = createTable(ctx.rowNumber, ctx.columnNumber, ctx.mineNumber);
    navigate("/game");
  };

  const playerNameChangeHandler = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <Container>
      <form onSubmit={AddPlayerHandler}>
        <TitleContainer>
          <Title>MineSweeper</Title>
        </TitleContainer>
        <InputContainer>
          <Label htmlFor="playername">PlayerName:</Label>
          <Input
            id="playername"
            type="text"
            value={playerName}
            onChange={playerNameChangeHandler}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="dif">Choose difficulty:</Label>

          <Select name="dif" id="dif" onChange={gameModeHandler}>
            <option hidden value="choose">
              choose
            </option>
            <option value="10,10,10">easy</option>
            <option value="15,15,20">medium</option>
            <option value="20,20,30">hard</option>
            <option value="custom">custom</option>
          </Select>
        </InputContainer>
        {gameMode === "custom" && <Custom />}
        <Button
          type="submit"
          disabled={playerName.length === 0 || gameMode === "choose"}
        >
          Start Game
        </Button>
      </form>
    </Container>
  );
};

export default AddPlayer;
