import { useState, useEffect } from "react";
import { Head } from "./styles";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);
  }, [timer]);

  return <Head>Time: {timer} </Head>;
};

export default Timer;
