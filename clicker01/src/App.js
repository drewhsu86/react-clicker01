import { Routes, Route } from "react-router-dom"
import Clicker from "./Components/Clicker"
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Refreshing the page will erase all your clicks!</h1>
      </div>
      <Routes>
        <Route path="/" element={<Clicker />} />
      </Routes>
    </div>
  );
}

export default App;
