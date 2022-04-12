import React, { useState } from "react";
import "./employee-working.css";
import Info from "./info/info";
import Working from "./working/working";
import Advance from "./advance/advance";
import Statistics from "./statistics/statistics";
import { tab } from "@testing-library/user-event/dist/tab";

function EmployeeWorking(props) {
    let employee = props.employee
    const [tabId, setTabId] = useState(1)
    const [tabElement, setTabElement] = useState(<Info employee={employee}></Info>)
    if (tabId === 1) {
        // setTabElement(<Info></Info>)
    }

    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <p className={`nav-link ${tabId === 1 ? "active" : ""}`}>INFORMATIONS</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link">WORKING</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link">ADVANCE</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link">STATISTICS</p>
                </li>
            </ul>
            <div>
                {tabElement}
            </div>
        </div>
    );
}

export default EmployeeWorking;
