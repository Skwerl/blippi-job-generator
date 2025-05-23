import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import Cookies from './Pages/Cookies';
import Prototype from './Pages/Prototype';

export default function App() {

  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/prototype" element={<Prototype />} />
    </Routes>
  </Router>

}