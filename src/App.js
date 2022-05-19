import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
export default App;
