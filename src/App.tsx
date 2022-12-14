import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login loginProps="sas"/>} />
        <Route path="/signup" element={<Signup signupProps="dasd" />} />
      </Routes>
    </div>
  );
}

export default App;
