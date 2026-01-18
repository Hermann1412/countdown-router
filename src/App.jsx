import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Done from "./pages/Done";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/done" element={<Done />} />
    </Routes>
  );
}

export default App;
