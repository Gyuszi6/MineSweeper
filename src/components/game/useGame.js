import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../store/data-context";

const useGame = () => {
  const ctx = useContext(DataContext);
  const navigate = useNavigate();

  const createTable = (row, column, mine) => {
    const table = [];
    for (let i = 0; i < row; i++) {
      table.push([]);
      for (let j = 0; j < column; j++) {
        table[i].push({ value: 0, state: "unclicked" });
      }
    }

    for (let i = 0; i < mine; i++) {
      let x = Math.floor(Math.random() * row);
      let y = Math.floor(Math.random() * column);
      while (table[x][y].value === "X") {
        x = Math.floor(Math.random() * row);
        y = Math.floor(Math.random() * column);
      }
      table[x][y].value = "X";
    }

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        if (table[i][j].value !== "X") {
          for (let k = i - 1; k <= i + 1; k++) {
            for (let l = j - 1; l <= j + 1; l++) {
              if (k >= 0 && l >= 0 && k < row && l < column) {
                if (table[k][l].value === "X") {
                  table[i][j].value++;
                }
              }
            }
          }
        }
      }
    }

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        if (table[i][j].value === 0) {
          table[i][j].value = "";
        }
      }
    }
    return table;
  };

  const clickHandler = (event, value) => {
    document.oncontextmenu = function () {
      return false;
    };
    event.preventDefault();
    if (event.button === 0) {
      value.state = "clicked";
      ctx.click++;
    }
    if (event.button === 2 && value.state === "unclicked") {
      value.state = "rightclicked";
    }
  };

  const fixRightClick = (event, value) => {
    if (event.button === 2 && value.state === "rightclicked") {
      value.state = "unclicked";
    }
  };

  const checkLost = (event, value) => {
    if (value.value === "X" && event.button === 0) {
      alert("Lost");
      navigate("/");
    }
  };

  const checkWin = () => {
    for (let i = 0; i < ctx.rowNumber; i++) {
      for (let j = 0; j < ctx.columnNumber; j++) {
        if (ctx.table[i][j].state === "unclicked") {
          return;
        }
        if (
          ctx.table[i][j].state === "rightclicked" &&
          ctx.table[i][j].value !== "X"
        ) {
          return;
        }
        if (
          ctx.table[i][j].state === "clicked" &&
          ctx.table[i][j].value === "X"
        ) {
          return;
        }
      }
    }
    alert("win");
    navigate("/");
  };

  const checkZero = (event, i, j) => {
    if (event.button === 0 && ctx.table[i][j].value === "") {
      for (let k = i - 1; k <= i + 1; k++) {
        for (let l = j - 1; l <= j + 1; l++) {
          if (
            k >= 0 &&
            l >= 0 &&
            k < ctx.rowNumber &&
            l < ctx.columnNumber &&
            (k !== i || l !== j)
          ) {
            if (
              ctx.table[k][l].state === "unclicked" &&
              ctx.table[k][l].value !== ""
            ) {
              ctx.table[k][l].state = "clicked";
            }
            if (
              ctx.table[k][l].state === "unclicked" &&
              ctx.table[k][l].value === ""
            ) {
              ctx.table[k][l].state = "clicked";
              checkZero(event, k, l);
            }
          }
        }
      }
    }
  };

  return {
    createTable,
    clickHandler,
    fixRightClick,
    checkLost,
    checkWin,
    checkZero,
  };
};

export default useGame;
