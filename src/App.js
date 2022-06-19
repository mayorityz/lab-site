import "./App.css";

import { Route, Routes } from "react-router";
import Index from "./components/Index";
import ComingSoon from "./components/ComingSoon";
import ComingSoon2 from "./components/ComingSoon2"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/afrodiety.com" element={<ComingSoon />}/>
        <Route path="/estate-chain.com" element={<ComingSoon2 />}/>
      </Routes>
    </div>
  );
}

export default App;
