import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VotePage from './vote.jsx';
import AdminVotePage from './admin.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<VotePage />} />
        <Route path="/admin" element={<AdminVotePage />} />
      </Routes>
    </Router>
  )
}

export default App;