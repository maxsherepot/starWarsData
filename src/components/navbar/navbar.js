import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bgColor rounded mb-4">
            <Link to="/" className="navbar-brand nav-link" >
                <h3 className="mb-1">SW Data</h3>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ml-2">
                        <Link to="/people/" className="nav-link">People</Link>
                    </li>
                    <li className="nav-item ml-2 ">
                        <Link to="/species/" className="nav-link">Species</Link>
                    </li>
                    <li className="nav-item ml-2">
                        <Link to="/planets/" className="nav-link">Planets</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;