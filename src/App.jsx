import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Nav from './components/nav/Nav.jsx';
import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Router></Router>
    </BrowserRouter>
  );
}

export default App;
