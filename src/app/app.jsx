import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './app.scss';
import Nav from '../components/nav/nav.jsx';
import Router from './router';

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Router></Router>
    </BrowserRouter>
  );
}

export default App;
