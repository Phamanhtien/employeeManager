import React, { useEffect, useState } from "react";
import "./info.css";
import { Dropdown, DropdownButton } from "react-bootstrap";

import Loading from "../../../../util/loading/loading";

function Info(props) {
    const [team, setTeam] = useState();
    // address
    const [address, setAddress] = useState("");
    const [addressMessageError, setAddressMessageError] = useState("");
    const [isAddressPassed, setAddressPassed] = useState(false);
    // salary per hour
    const [salaryPerHour, setSalaryPerHour] = useState("")
    const [salaryPerHourMessageError, setSalaryPerHourMessageError] = useState("")
    const [isSalaryPerHourPassed, setSalaryPerHourPassed] = useState(false)

    let employee = props.employee;
    
    useEffect (()=> {
        
    })

    if (employee === undefined) {
        return <Loading></Loading>;
    }

    function validateAddress(address) {

    }
    let date = new Date(employee.startDate).toISOString().split("T")[0];
    return (
        <div>
            <div className="infomation">
                <h3 className="h3-infomations">INFOMATIONS</h3>
                <div className="row row-info">
                    <div className="col col-info form-group date-info">
                        <input
                            type="date"
                            // placeholder="Start date"
                            className="form-control disabled"
                            value={date}
                        ></input>
                    </div>
                    <div className="col col-info form-group drop-down-info">
                        <DropdownButton
                            id="dropdown-basic-button"
                            title={employee.teamName.trim()}
                        >
                            <Dropdown.Item href="#/action-1">
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <div className="row row-info">
                    <input
                        type="text"
                        className="col col-info"
                        aria-describedby="basic-addon1"
                        placeholder={employee.address.trim()}
                    ></input>
                    <input
                        type="text"
                        className="col col-info"
                        aria-describedby="basic-addon1"
                        value={employee.salaryPerHour}
                    ></input>
                </div>
            </div>
        </div>
    );
}

export default Info;
