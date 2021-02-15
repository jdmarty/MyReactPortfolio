import React from "react";

const NoMatch = () => {
  return (
    <div className="text-center" style={{ height: "80vh" }}>
      <i className="fal fa-10x fa-user-robot"></i>
      <h1 className="display-4 text-center">Oops! Page not found</h1>
      <a href="/MyReactPortfolio">Go to Homepage</a>
    </div>
  );
};

export default NoMatch;
