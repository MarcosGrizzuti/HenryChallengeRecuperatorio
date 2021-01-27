import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Henry from "../images/Henry.png";
import "./Home.scss"

export const Home = () => {

  const cache = JSON.parse(localStorage.getItem("Producto"));

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img className="Logo" src={Henry} />
          <h3>Soy Henry</h3>
        </div>
        <div className="col-12">

        </div>
        {cache ?
        <div className="col-12">
          <div className="col-12 title">El ultimo producto que visitaste fue:</div>
          <Link to={`/producto/${cache.id}`} className="col-3">
          <div className="product">
            <div className="clash-card barbarian sombra mb-5">
                <div>
                    {/* IMAGEN */}
                    <div className="clash-card__image clash-card__image--barbarian">
                        <img alt="barbarian" src={cache.thumbnail}/>
                    </div>

                    {/* NOMBRE */}
                    <div className="clash-card__unit-name">{cache.title}</div>
                    <br/>

                    {/* CONDICION */}
                    <div className="clash-card">{cache.condition}</div>
                    <br/>
                    <br/>
                </div>

                <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix ">
                    {/* PRECIO */}
                    <div className="one-third ">
                        <div className="stat-value"><h6>Precio</h6></div>
                        <div className="stat">{cache.currency_id} {cache.price}</div>
                    </div>

                    {/* CANTIDAD */}
                    <div className="one-third no-border">
                        <div className="stat-value"><h6>Stock</h6></div>
                        <div className="stat">{cache.available_quantity}</div>
                    </div>
                </div>
            </div>
          </div>
          </Link>
        </div> : null}
      </div>
    </div>

  );
};
