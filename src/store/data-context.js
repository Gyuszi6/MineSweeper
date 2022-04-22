import React from "react";

const DataContext = React.createContext({
  playerName: "",
  table: [],
  rowNumber: 0,
  columnNumber: 0,
  mineNumber: 0,
  click: 0,
});

export default DataContext;
