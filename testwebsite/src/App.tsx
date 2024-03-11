import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/logIn';
import Monitoring from './pages/monitoring';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/monitor" element={<Monitoring />} />
      </Routes>
    </Router>
  );
}

export default App;