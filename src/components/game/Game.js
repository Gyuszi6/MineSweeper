import DataContext from "../../store/data-context";
import {
  Container,
  Head,
  HeadContainer,
  Table,
  Td,
  Td1,
  Td2,
  Tr,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import useGame from "./useGame";

const Game = () => {
  const ctx = useContext(DataContext);
  const { clickHandler, fixRightClick, checkLost, checkWin, checkZero } =
    useGame();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (ctx.playerName === "") {
      navigate("/");
    }
  }, [ctx.playerName, navigate]);

  console.log("a git kedvéért! :)");

  return (
    <Container>
      <HeadContainer>
        <Head>Name: {ctx.playerName}</Head>
        <Timer />
        <Head>mines: {ctx.mineNumber}</Head>
      </HeadContainer>
      <Table>
        <tbody>
          {ctx.table.map((row, rindex) => (
            <Tr key={rindex}>
              {row.map((value, cindex) =>
                value.state === "unclicked" ? (
                  <Td
                    key={cindex}
                    onMouseDown={(event) => {
                      clickHandler(event, value);
                      setLoading(!loading);
                      checkZero(event, rindex, cindex);
                      checkLost(event, value);
                      checkWin();
                    }}
                  >
                    {value.value}
                  </Td>
                ) : value.state === "clicked" ? (
                  <Td1 key={cindex}>{value.value}</Td1>
                ) : (
                  <Td2
                    key={cindex}
                    onMouseDown={(event) => {
                      clickHandler(event, value);
                      fixRightClick(event, value);
                      setLoading(!loading);
                      checkLost(event, value);
                      checkWin();
                    }}
                  >
                    {value.value}
                  </Td2>
                )
              )}
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Game;
