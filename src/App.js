import './app/styles/main.css';


import Header from './app/shared/Header';


import { Routes, Route } from "react-router-dom";
import HomePage from "./app/pages/HomePage";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

    </div>
  );
}

export default App;
