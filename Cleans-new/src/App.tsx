// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lending from './Lending';
import Register from './Register';


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Lending/>} />
        <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
