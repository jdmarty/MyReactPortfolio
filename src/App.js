import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Portfolio from "./pages/Portoflio"
import Header from "./components/Header"
import './App.css';

function App() {
  const [page, setPage] = useState("home")

  // When the app mounts, check the page location
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
        <Header page={page}/>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Router>
    </div>
  );
}

export default App;
