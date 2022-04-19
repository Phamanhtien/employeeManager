import React from "react";
import { Link } from "react-router-dom";

import logo from "./../assets/icon/EmployeeLogo.png";
import "./navigator.css";

function Navigator() {
    let pathname = window.location.pathname;
    return (
        <div className="navbar text-center">
            <div className="">
                <div className="app-title-logo ">
                    <Link to="/employee-list">
                        <img className="logo" src={logo} alt="logo"></img>{" "}
                    </Link>
                </div>
                <div className="app-title ">Employee Mannager</div>
            </div>
            <div className="tabs">
                <Link
                    className={`btn btn-outline-primary ${
                        pathname === "/employee-list" ? "active" : ""
                    }`}
                    to="/employee-list"
                >
                    Employee
                </Link>
                <Link
                    className={`btn btn-outline-primary ${
                        pathname === "/team-list" ? "active" : ""
                    }`}
                    to="/team-list"
                >
                    Team
                </Link>
            </div>
        </div>
    );
}

export default Navigator;
