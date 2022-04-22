import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/game/Game";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="game" element={<Game />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
