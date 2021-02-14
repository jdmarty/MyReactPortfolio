import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home"
import Portfolio from "./pages/Portoflio"
// Permanent Components
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';

function App() {
  const [page, setPage] = useState("home")

  // When the app mounts, check the page location
  useEffect(() => {
    if (window.location.pathname === "/MyReactPortfolio/portfolio") {
      setPage("portfolio")
    } else {
      setPage("home")
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <Header page={page} />
        <Route
          exact
          path={["/MyReactPortfolio", "/MyReactPortfolio/home"]}
          component={Home}
        />
        <Route exact path="/MyReactPortfolio/portfolio" component={Portfolio} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
