import './App.css'
import Home from './pages/Home';
import RoadMap from './pages/RoadMap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Technology from './pages/Technology';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/:id" element={<Technology />} /> 
      </Routes>
    </Router>
    
  );
}

export default App
