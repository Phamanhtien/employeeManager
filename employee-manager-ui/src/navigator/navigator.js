import logo from './../assets/icon/EmployeeLogo.png'
import './navigator.css'

import React from 'react';

function Navigator () {

    return (
        <div className="navbar text-center">
            <div className="">
                <div className="app-title-logo ">
                    <img className="logo" src={logo}></img>
                </div>
                <div className="app-title ">
                    Employee Mannager
                </div>
            </div>
            <div className="tabs">
                <a className="btn btn-outline-primary active" href="/employee-list" >Employee</a>
                <a className="btn btn-outline-primary" href="/team-list" >Team</a>
            </div>
        </div>
    );
}

export default Navigator