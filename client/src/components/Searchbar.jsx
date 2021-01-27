import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { obtenerProductos } from "../redux/actions/obtenerProductosAction"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./Searchbar.scss"

export const SearchBar = () => {
    const dispatch = useDispatch();
    const [inputProducto, setInputProducto] = useState("");

    const handleInputChange = (e) => {
        setInputProducto(e.target.value);
    };

    function buscarProducto() {
        dispatch(obtenerProductos(inputProducto))
    }

    return (
        <div className="col-5">
            <div className="searchbar">
                <div className="nav-item w-100 m-auto">
                    <form action="/catalogo" onSubmit={buscarProducto}>
                        <input
                            type="search"
                            name="query"
                            autoComplete="off"
                            placeholder="Buscar Producto"
                            onChange={handleInputChange}
                            className="nav-link w-100 border border-light p-2"
                            href="#"
                            aria-haspopup="true"
                        />
                        <Link to="/catalogo" className="icon" onClick={buscarProducto}><FontAwesomeIcon icon={faSearch} /></ Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
