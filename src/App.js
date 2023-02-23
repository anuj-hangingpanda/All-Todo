import "./App.css";
import "react-dom";
import { Route, Routes } from "react-router";
import { Classbased, Functionbased, WithRedux } from "./Pages";

function App() {
  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<Classbased />} />
        <Route path="/Functionbased" element={<Functionbased />} />
        <Route path="/WithRedux" element={<WithRedux />} />
      </Routes>
    </div>
  );
}

export default App;
