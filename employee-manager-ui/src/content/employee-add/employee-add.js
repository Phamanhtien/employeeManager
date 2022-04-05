import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { Dropdown, DropdownButton } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import Employee from "./../../model/employee";
import RetrieveTeams from "./../../util/GeneralFunction/TeamAxios";
import "./employee-add.css";

function EmployeeAdd({ forwardRef }) {

    const [employee, setEmployee] = useState(new Employee());
    // name
    const [nameMessageError, setNameMessageError] = useState("");
    const [nameLength, setNameLength] = useState(0);
    const [isNamePassed, setNamePassed] = useState(false);
    //team
    const [teamList, setTeamList] = useState([]);
    const [teamName, setTeamName] = useState("Team name");
    const [teamMessageError, setTeamMessageError] = useState("");
    //address
    const [addressMessageError, setAddressMessageError] = useState("");
    const [isAddressPassed, setAddressPassed] = useState(false);
    //sex 
    const [sex, setSex] = useState("Sex");
    const [sexMessageError, setSexMessageError] = useState("");
    //
    let ageMessageError = "";
    let isAgePassed = false;
    let salaryPerHourMessageError = "";
    let isSalaryPerHourPassed = false;
    let phoneMessageError = "";
    let isPhonePassed = false;

    useEffect(() => {
        console.log(teamList);
        if (teamList.length > 0) {
            return;
        }

        if (teamList.length === 0) {
            RetrieveTeams().then((res) => {
                setTeamList(res);
            });
        }
    });

    function validateEmployeeFullName(employeeFullName) {
        setNameLength(employeeFullName.length);
        if (employeeFullName === "") {
            setNameMessageError("Name can not be empty");
            setNamePassed(false);
        } else {
            setNameMessageError("");
            setNamePassed(true);
            employee.fullName = employeeFullName;
        }
    }

    function validateEmployeeTeam (teamName, teamId) {
        if (teamName === "Team name") {
            setTeamMessageError("Team had to be chosen");
        } else {
            setTeamMessageError("");
            employee.teamId(teamId);
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

    function validateEmployeeSex (sex) {
        if (sex === "Sex") {
            setSexMessageError("Sex had to be chosen");
        } else {
            setSexMessageError("");
            employee.sex(sex);
        }
    }

    function validateEmployeeAge(employeeAge) {
        if (isNaN(Number(employeeAge))) {
          this.ageMessageError = "Age has to be a number";
          this.isAgePassed = false;
        }
        else if (employeeAge < 18 || employeeAge > 60) {
          this.ageMessageError = "Age has to from 18 to 60";
          this.isAgePassed = false;
        } else {
          this.ageMessageError = "";
          this.isAgePassed = true;
          this.employee.setAge(employeeAge);
        }
      }

    return (
        <Popup
            position="middle center"
            modal
            nested
            trigger={
                <button className="BsPlusCircleFill">
                    <BsPlusCircleFill> </BsPlusCircleFill>
                </button>
            }
        >
            {(close) => (
                <div className="employee-add-modal">
                    <div className="modal-header">
                        <h4> Add new Employee </h4>
                    </div>
                    <div className="modal-body">
                        <div className="form-group form-group-name">
                            <p className="title"> Full name employee </p>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter name"
                                onChange={(input) => {
                                    validateEmployeeFullName(
                                        input.target.value
                                    );
                                }}
                            ></input>
                            <div className="row">
                                <p className="validator col">
                                    {nameMessageError}
                                </p>
                                <p className="name-length-per-max col">
                                    {nameLength}
                                    /225
                                </p>
                            </div>
                        </div>
                        <div className="form-group form-group-team">
                            <p className="title"> Team * </p>
                            <div className="drop-down">
                                <DropdownButton
                                    className="drop-down-button"
                                    id="dropdown-basic-button"
                                    title={teamName}
                                >
                                    {teamList.map((team) => {
                                        return (
                                            <Dropdown.Item
                                                className="drop-down-item"
                                                onClick={() => {
                                                    setTeamName(team.name);
                                                }}
                                            >
                                                {team.name}
                                            </Dropdown.Item>
                                        );
                                    })}
                                </DropdownButton>
                            </div>
                            <div className="row">
                                <p className="validator col">{teamMessageError}</p>
                            </div>
                        </div>
                        <p className="name-length-per-max"> </p>
                        <div className="form-group row">
                            <div className="form-group-address col-xs-1">
                                <p className="title"> Address * </p>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter address"
                                    onChange={(input) => {
                                        validateEmployeeAddress(
                                            input.target.value
                                        );
                                    }}
                                ></input>
                                <div className="row">
                                    <p className="validator col">
                                        {addressMessageError}
                                    </p>
                                </div>
                            </div>
                            <div className="form-group-sex col-xs-1">
                                <p className="title"> Sex * </p>
                                <div className="drop-down">
                                    <DropdownButton
                                        className="drop-down-button"
                                        id="dropdown-basic-button"
                                        title={sex}
                                    >
                                        <Dropdown.Item onClick={()=>{
                                            setSex(Male)
                                        }}>
                                            Male
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            Female
                                        </Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="form-group-age col-xs-1">
                                <p className="title"> Age * </p>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter age"
                                ></input>
                            </div>
                            <div className="form-group-start col-xs-1">
                                <p className="title"> Start day * </p>
                                <input
                                    type="date"
                                    placeholder="yyyy-MM-dd"
                                    className="form-control"
                                    value="2021-01-17"
                                ></input>
                            </div>
                            <p className="validator"> err </p>
                        </div>
                        <div className="form-group row">
                            <div className="form-group-money-per-hour col-xs-1">
                                <p className="title"> Money / hour * </p>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter money/hour"
                                ></input>
                                <p className="validator"> err </p>
                            </div>
                            <div className="form-group-phone-number col-xs-1">
                                <p className="title"> Phone number * </p>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter phone number"
                                ></input>
                                <p className="validator"> errr </p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">
                            SUBMIT
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-dark"
                            onClick={() => close()}
                        >
                            CANCEL
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default EmployeeAdd;
