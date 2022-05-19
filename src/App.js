import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Form from './Components/Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/question" element={<Form />} />
      </Routes>
    </Router>
  );
}
export default App;
