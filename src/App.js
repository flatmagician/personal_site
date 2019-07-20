import React from 'react';
import './App.css';
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"



function App() {
  return (
    <Router>
      <div className="App">
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/Contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
