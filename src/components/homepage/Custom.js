import { Input, InputContainer, Label } from "./styles";
import { useState, useContext, useEffect } from "react";
import DataContext from "../../store/data-context";

const Custom = () => {
  const ctx = useContext(DataContext);
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [mines, setMines] = useState(0);

  const rowsChangeHandler = (event) => {
    setRows(event.target.value);
  };
  const columnsChangeHandler = (event) => {
    setColumns(event.target.value);
  };
  const minesChangeHandler = (event) => {
    setMines(event.target.value);
  };
  useEffect(() => {
    ctx.rowNumber = rows;
    ctx.columnNumber = columns;
    ctx.mineNumber = mines;
  }, [rows, columns, mines, ctx]);
  return (
    <div>
      <InputContainer>
        <Label htmlFor="row">Row:</Label>
        <Input
          id="row"
          type="number"
          value={rows}
          onChange={rowsChangeHandler}
          min={1}
          max={20}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="column">Column:</Label>
        <Input
          id="column"
          type="number"
          value={columns}
          onChange={columnsChangeHandler}
          min={1}
          max={20}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="mine">Mine:</Label>
        <Input
          id="mine"
          type="number"
          value={mines}
          onChange={minesChangeHandler}
          min={1}
          max={150}
        />
      </InputContainer>
    </div>
  );
};

export default Custom;
