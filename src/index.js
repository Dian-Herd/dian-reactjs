import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavbarComponent from './component/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About';
import BettaFish from './component/BettaFish'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <NavbarComponent />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/bettafish/*" element={<BettaFish />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
