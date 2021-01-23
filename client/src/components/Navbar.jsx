import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.scss"
import { SearchBar } from "./Searchbar"

export const NavBar = () => {
    return (
        <nav>
            <div className="container-fluid">
                <div className="bg-color">
                    <div className="width">
                        <div className="row">
                            <div className="col-3">
                                <div>
                                    <Link className="logo" to="/">Mercado Liebre</Link>
                                </div>
                            </div>
                            <div className="col-5">
                                <SearchBar />
                            </div>
                            <div className="col-4">
                                <div className="msg">
                                    Recuperatorio Henry Labs
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
