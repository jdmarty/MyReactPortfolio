import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import Home from "./pages/Home"
import Portfolio from "./pages/Portoflio"
import NoMatch from "./pages/NoMatch"
// Permanent Components
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';

function App() {
  const [page, setPage] = useState("home")

  // When the app mounts, check the page location
  useEffect(() => {
    console.log(process.env.PUBLIC_URL)
    if (window.location.pathname === "/MyReactPortfolio/portfolio") {
      setPage("portfolio")
    } else {
      setPage("home")
    }
  }, [])

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header page={page} />
        <Switch>
          <Route
            exact
            path={["/", "/home"]}
            component={Home}
          />
          <Route
            exact
            path="/portfolio"
            component={Portfolio}
          />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
