import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #8085a8;
`;

export const HeadContainer = styled.div`
  width: 100vw;
  padding: 10px 0 30px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Head = styled.header`
  color: black;
  font-weight: bold;
  font-size: 20px;
`;

export const TableContainer = styled.div``;

export const Table = styled.table`
  border: 6px solid black;
  border-collapse: collapse;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  border: 2px solid black;
  background-color: grey;
  width: 20px;
  height: 20px;
  font-size: 0px;
`;

export const Td1 = styled.td`
  border: 2px solid black;
  background-color: green;
  width: 20px;
  height: 20px;
  font-size: 10px;
`;

export const Td2 = styled.td`
  border: 2px solid black;
  background-color: red;
  width: 20px;
  height: 20px;
  font-size: 0px;
`;
