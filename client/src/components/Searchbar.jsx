import React, { useState } from "react";
import axios from "axios";
/* import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; */
import "./Searchbar.scss"

export const SearchBar = () => {

    const [inputProducto, setInputProducto] = useState("");

    const handleInputChange = (e) => {
        setInputProducto(e.target.value);
    };

    function buscarProducto() {
        axios.get(`http://localhost:3001/api/search?query=${inputProducto}`)
        .then((response) => {
            console.log(response)
        })
    }

    return (
        <div className="col-5">
            <div className="searchbar">
                <div className="nav-item dropdown w-100 m-auto">
                    <input
                        type="search"
                        name="search"
                        autoComplete="off"
                        placeholder="Buscar Producto"
                        onChange={handleInputChange}
                        className="nav-link w-100 border border-light p-2"
                        href="#"
                        aria-haspopup="true"
                    />
                    <label onClick={buscarProducto}>Buscar</label>
                </div>
            </div>
        </div>
    );
};
