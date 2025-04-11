import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Prototype from './Pages/Prototype';

export default function App() {

  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/prototype" element={<Prototype />} />
    </Routes>
  </Router>

}