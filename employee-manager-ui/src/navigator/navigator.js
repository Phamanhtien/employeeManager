import logo from './../assets/icon/EmployeeLogo.png'
import './navigator.css'

import React from 'react';

class Navigator extends React.Component {
    render() {
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
                    <a className="btn btn-outline-primary active" href="/employee" >Employee</a>
                    <a className="btn btn-outline-primary" href="/team" >Team</a>
                </div>
            </div>
        );
    }
}

export default Navigator