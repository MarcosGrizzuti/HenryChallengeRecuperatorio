import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Henry from "../images/Henry.png";
import "./Home.scss"

export const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img className="Logo" src={Henry} />
          <h3>Soy Henry</h3>
        </div>
      </div>
    </div>

  );
};
