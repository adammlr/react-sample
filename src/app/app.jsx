import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './app.scss';
import Nav from '../components/nav/nav.jsx';
import Router from './router';

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <section className="section">
        <div className="container">
          <Router></Router>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;
