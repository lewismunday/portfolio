import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CSV2JSON from "./components/CSV2JSON";
import NotFound from "./components/NotFound";

function App() {
  return (
      <BrowserRouter>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path={"/csv2json"} element={<CSV2JSON />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
