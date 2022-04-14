import React, { useEffect, useState } from "react";
import "./info.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useSnapshot } from "valtio";

import Loading from "../../../../util/loading/loading";
import RetrieveTeams from "../../../../util/GeneralFunction/TeamAxios";
import { EmployeeState } from "../../../../global-states/employee-state";

function Info(props) {
    const employeeStateSnap = useSnapshot(EmployeeState);
    //team
    const [teamList, setTeamList] = useState([]);
    const [teamName, setTeamName] = useState("");
    // address
    const [address, setAddress] = useState("");
    // salary per hour
    const [salaryPerHour, setSalaryPerHour] = useState("");

    useEffect(() => {
        setTeamName(employeeStateSnap.employee.teamName);
        setAddress(employeeStateSnap.employee.address.trim());
        setSalaryPerHour(employeeStateSnap.employee.salaryPerHour);
        RetrieveTeams().then((res) => {
            setTeamList(res);
        });
    }, []);

    if ((employeeStateSnap.employee.id === undefined, teamList === undefined)) {
        return <Loading></Loading>;
    }

    function validateEmployeeAddress(employeeAddress) {
        if (employeeAddress === "") {
            alert("Address can not be empty");
            return;
        } else {
            EmployeeState.employee.address = employeeAddress;
        }
    }

    let date = new Date(employeeStateSnap.employee.startDate)
        .toISOString()
        .split("T")[0];
    return (
        <div>
            <div className="infomation">
                <h3 className="h3-infomations">INFOMATIONS</h3>
                <div className="row row-info">
                    <div className="col col-info form-group date-info">
                        <input
                            readOnly
                            type="date"
                            // placeholder="Start date"
                            className="form-control disabled"
                            value={date}
                        ></input>
                    </div>
                    <div className="col col-info form-group drop-down-info">
                        <DropdownButton
                            id="dropdown-basic-button"
                            title={teamName}
                        >
                            {teamList.map((team) => {
                                return (
                                    <Dropdown.Item
                                        key={team.id}
                                        className="drop-down-item"
                                        onClick={() => {
                                            setTeamName(team.name);
                                            EmployeeState.employee.teamId = team.id;
                                        }}
                                    >
                                        {team.name}
                                    </Dropdown.Item>
                                );
                            })}
                        </DropdownButton>
                    </div>
                </div>
                <div className="row row-info">
                    <input
                        type="text"
                        className="col col-info"
                        aria-describedby="basic-addon1"
                        placeholder={address}
                        onChange={(inputText) => {
                            setAddress(inputText.target.value);
                            validateEmployeeAddress(inputText.target.value);
                        }}
                    ></input>
                    <input
                        readOnly
                        type="text"
                        className="col col-info disabled"
                        aria-describedby="basic-addon1"
                        placeholder={salaryPerHour}
                    ></input>
                </div>
            </div>
        </div>
    );
}

export default Info;
