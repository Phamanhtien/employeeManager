import React, { useState } from "react";
import { useSnapshot } from "valtio";

import "./employee-working.css";
import Info from "./info/info";
import Working from "./working/working";
import Advance from "./advance/advance";
import Statistics from "./statistics/statistics";
import { TabIdState } from "./../../../global-states/tab-id-state"

function EmployeeWorking(props) {
    const tabIdStateSnap = useSnapshot(TabIdState);
    const [tabElement, setTabElement] = useState(
        <Info></Info>
    );

    function changeTab(tabId) {
        if (tabId === 1) {
            TabIdState.tabId = 1;
            setTabElement(<Info></Info>);
            return;
        }

        if (tabId === 2) {
            TabIdState.tabId = 2;
            setTabElement(<Working></Working>);
            return;
        }

        if (tabId === 3) {
            TabIdState.tabId = 3;
            setTabElement(<Advance></Advance>);
        }

        if (tabId === 4) {
            TabIdState.tabId = 4;
            setTabElement(<Statistics></Statistics>);
        }
    }

    return (
        <div className="working">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <p
                        className={`nav-link ${tabIdStateSnap.tabId === 1 ? "active" : ""}`}
                        onClick={() => {
                            changeTab(1);
                        }}
                    >
                        INFORMATIONS
                    </p>
                </li>
                <li className="nav-item">
                    <p
                        className={`nav-link ${tabIdStateSnap.tabId === 2 ? "active" : ""}`}
                        onClick={() => {
                            changeTab(2);
                        }}
                    >
                        WORKING
                    </p>
                </li>
                <li className="nav-item">
                    <p
                        className={`nav-link ${tabIdStateSnap.tabId === 3 ? "active" : ""}`}
                        onClick={() => {
                            changeTab(3);
                        }}
                    >
                        ADVANCE
                    </p>
                </li>
                <li className="nav-item">
                    <p
                        className={`nav-link ${tabIdStateSnap.tabId === 4 ? "active" : ""}`}
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
