import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Catalogo.scss";

export const Catalogo = () => {
    const catalogo = useSelector((store) => store.productos.productos);

    console.log(catalogo)

    return (
        <div className="productos">
            <div className="container-fluid">
                <div className="row">
                    {catalogo.map((producto) => {
                        return (
                            <Link to={`/producto/${producto.id}`} className="col-3">
                                <div className="clash-card barbarian sombra mb-5">
                                    <div>
                                        {/* IMAGEN */}
                                        <div className="clash-card__image clash-card__image--barbarian">
                                            <img alt="barbarian" src={producto.thumbnail}/>
                                        </div>

                                        {/* NOMBRE */}
                                        <div className="clash-card__unit-name">{producto.title}</div>
                                        <br/>

                                        {/* CONDICION */}
                                        <div className="clash-card">{producto.condition}</div>
                                        <br/>
                                        <br/>
                                    </div>

                                    <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix ">
                                        {/* PRECIO */}
                                        <div className="one-third ">
                                            <div className="stat-value"><h6>Precio</h6></div>
                                            <div className="stat">{producto.currency_id} {producto.price}</div>
                                        </div>

                                        {/* CANTIDAD */}
                                        <div className="one-third no-border">
                                            <div className="stat-value"><h6>Stock</h6></div>
                                            <div className="stat">{producto.available_quantity}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
