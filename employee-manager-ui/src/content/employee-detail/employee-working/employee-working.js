import React, { useState } from "react";
import "./employee-working.css";
import Info from "./info/info";
import Working from "./working/working";
import Advance from "./advance/advance";
import Statistics from "./statistics/statistics";
import { tab } from "@testing-library/user-event/dist/tab";

function EmployeeWorking(props) {
    let employee = props.employee;
    const [tabId, setTabId] = useState(1);
    const [tabElement, setTabElement] = useState(
        <Info employee={employee}></Info>
    );

    function changeTab(tabId) {
        if (tabId === 1) {
            setTabId(1);
            setTabElement(<Info employee={employee}></Info>);
            return;
        }

        if (tabId === 2) {
            setTabId(2);
            setTabElement(<Working employee={employee}></Working>);
            return;
        }

        if (tabId === 3) {
            setTabId(3);
            setTabElement(<Advance employee={employee}></Advance>);
        }

        if (tabId === 4) {
            setTabId(4);
            setTabElement(<Statistics employee={employee}></Statistics>);
        }
    }

    return (
        <div className="working">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <p
                        className={`nav-link ${tabId === 1 ? "active" : ""}`}
                        onClick={() => {
                            changeTab(1);
                        }}
                    >
                        INFORMATIONS
                    </p>
                </li>
                <li className="nav-item">
                    <p
                        className={`nav-link ${tabId === 2 ? "active" : ""}`}
                        onClick={() => {
                            changeTab(2);
                        }}
                    >
                        WORKING
                    </p>
                </li>
                <li className="nav-item">
                    <p
                        className={`nav-link ${tabId === 3 ? "active" : ""}`}
                        onClick={() => {
                            changeTab(3);
                        }}
                    >
                        ADVANCE
                    </p>
                </li>
                <li className="nav-item">
                    <p
                        className={`nav-link ${tabId === 4 ? "active" : ""}`}
                        onClick={() => {
                            changeTab(4);
                        }}
                    >
                        STATISTICS
                    </p>
                </li>
            </ul>
            <div>{tabElement}</div>
        </div>
    );
}

export default EmployeeWorking;
