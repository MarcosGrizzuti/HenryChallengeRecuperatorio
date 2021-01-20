import React from "react";
/* import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; */
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Product.scss";

export const Product = () => {
    return (
        <>
            <div className="clash-card barbarian sombra mb-5">
                <div>
                    {/* IMAGEN */}
                    <div className="clash-card__image clash-card__image--barbarian">
                        <img alt="barbarian" />
                    </div>

                    {/* NOMBRE */}
                    <div className="clash-card__unit-name">Nombre</div>
                    <br/>

                    {/* CONDICION */}
                    <div className="clash-card">Nuevo</div>
                    <br/>
                    <br/>
                </div>

                <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix ">
                    {/* PRECIO */}
                    <div className="one-third ">
                        <div className="stat-value"><h6>Precio</h6></div>
                        <div className="stat">$ Precio</div>
                    </div>

                    {/* CANTIDAD */}
                    <div className="one-third no-border">
                        <div className="stat-value"><h6>Stock</h6></div>
                        <div className="stat">Cantidad</div>
                    </div>
                </div>
            </div>
        </>
    );
};
