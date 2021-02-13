import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Nav from "./components/Nav"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
      </Router>
    </div>
  );
}

export default App;
