import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Portfolio from "./pages/Portoflio"
import Nav from "./components/Nav"
import './App.css';

function App() {
  const [page, setPage] = useState("home")

  useEffect(() => {
    if (window.location.pathname === "/portfolio") {
      setPage("portfolio")
    } else {
      setPage("home")
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <Nav page={page}/>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Router>
    </div>
  );
}

export default App;
