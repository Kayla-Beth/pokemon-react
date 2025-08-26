import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './app/shared/Header';
import HomePage from './app/pages/HomePage';
import './app/styles/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <Router>
      <Header /> {/* This must be at the top */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
