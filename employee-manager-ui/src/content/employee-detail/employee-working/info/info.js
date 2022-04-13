import React, { useEffect, useState } from "react";
import "./info.css";
import { Dropdown, DropdownButton } from "react-bootstrap";

import Loading from "../../../../util/loading/loading";
import RetrieveTeams from "../../../../util/GeneralFunction/TeamAxios";

function Info(props) {
    //team
    const [teamList, setTeamList] = useState([]);
    const [teamName, setTeamName] = useState("Team name");
    const [teamMessageError, setTeamMessageError] = useState("");
    const [isTeamPassed, setTeamPassed] = useState(false);
    // address
    const [address, setAddress] = useState("");
    const [addressMessageError, setAddressMessageError] = useState("");
    const [isAddressPassed, setAddressPassed] = useState(false);
    // salary per hour
    const [salaryPerHour, setSalaryPerHour] = useState("");
    const [salaryPerHourMessageError, setSalaryPerHourMessageError] =
        useState("");
    const [isSalaryPerHourPassed, setSalaryPerHourPassed] = useState(false);
    //
    let employee = props.employee;

    useEffect(() => {
        setAddress(employee.address.trim())
        setSalaryPerHour(employee.salaryPerHour)
        RetrieveTeams().then((res) => {
            setTeamList(res);
        });
    }, []);

    if ((employee === undefined, teamList === undefined)) {
        return <Loading></Loading>;
    }

    function validateEmployeeTeam(teamName, teamId) {
        if (teamName === "Team name") {
            setTeamMessageError("Team had to be chosen");
            setTeamPassed(false);
        } else {
            setTeamMessageError("");
            setTeamPassed(true);
            employee.teamId = teamId;
        }
    }

    function validateEmployeeAddress(employeeAddress) {
        if (employeeAddress === "") {
            setAddressMessageError("Address can not be empty");
            setAddressPassed(false);
        } else {
            setAddressMessageError("");
            setAddressPassed(true);
            employee.address = employeeAddress;
        }
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
                            title={teamName}
                        >
                            {teamList.map((team) => {
                                return (
                                    <Dropdown.Item
                                        key={team.id}
                                        className="drop-down-item"
                                        onClick={() => {
                                            setTeamName(team.name);
                                            validateEmployeeTeam(
                                                team.name,
                                                team.id
                                            );
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
                        onChange={(inputText)=> {
                            setAddress(inputText.target.value)
                            validateEmployeeAddress(inputText.target.value)
                        }}
                    ></input>
                    <input
                        type="text"
                        className="col col-info disabled"
                        aria-describedby="basic-addon1"
                        placeholder={employee.salaryPerHour}
                    ></input>
                </div>
            </div>
        </div>
    );
}

export default Info;
