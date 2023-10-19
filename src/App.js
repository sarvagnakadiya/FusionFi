import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trade from "./pages/trade/Trade";
import Vault from "./pages/vault/Vault";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/vault" element={<Vault />} />
          <Route path="/trade" element={<Trade />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
