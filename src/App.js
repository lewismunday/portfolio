import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CSV2JSON from "./components/CSV2JSON";

function App() {
  return (
      <BrowserRouter>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path={"/csv2json"} element={<CSV2JSON />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
