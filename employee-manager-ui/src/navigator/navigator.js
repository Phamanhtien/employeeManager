import React from "react";

import logo from './../assets/icon/EmployeeLogo.png'
import './navigator.css'

function Navigator () {
    let pathname = window.location.pathname;
    return (
        <div className="navbar text-center">
            <div className="">
                <div className="app-title-logo ">
                    <a  href="/employee-list">
                        <img className="logo" src={logo} alt ="logo"></img>
                    </a>
                </div>
                <div className="app-title ">
                    Employee Mannager
                </div>
            </div>
            <div className="tabs">
                <a className={`btn btn-outline-primary ${pathname === "/employee-list" ? "active" : ""}`} href="/employee-list" >Employee</a>
                <a className={`btn btn-outline-primary ${pathname === "/team-list" ? "active" : ""}`} href="/team-list" >Team</a>
            </div>
        </div>
    );
}

export default Navigator