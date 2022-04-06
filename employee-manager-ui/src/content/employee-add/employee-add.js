import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { Dropdown, DropdownButton } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import Employee from "./../../model/employee";
import RetrieveTeams from "./../../util/GeneralFunction/TeamAxios";
import { AddEmployee } from "./../../util/GeneralFunction/EmployeeAxios";
import "./employee-add.css";

function EmployeeAdd(props) {
    const [employee, setEmployee] = useState(new Employee());
    // name
    const [nameMessageError, setNameMessageError] = useState("");
    const [nameLength, setNameLength] = useState(0);
    const [isNamePassed, setNamePassed] = useState(false);
    //team
    const [teamList, setTeamList] = useState([]);
    const [teamName, setTeamName] = useState("Team name");
    const [teamMessageError, setTeamMessageError] = useState("");
    const [isTeamPassed, setTeamPassed] = useState(false);
    //address
    const [addressMessageError, setAddressMessageError] = useState("");
    const [isAddressPassed, setAddressPassed] = useState(false);
    //sex
    const [sex, setSex] = useState("Sex");
    const [sexMessageError, setSexMessageError] = useState("");
    const [isSexPassed, setSexPassed] = useState(false);
    //age
    const [ageMessageError, setAgeMessageError] = useState("");
    const [isAgePassed, setAgePassed] = useState(false);
    //date
    const [startDate, setStartDate] = useState("");
    const [isStartDatePassed, setStartDatePassed] = useState(false);
    //salaryPerHour
    const [salaryPerHourMessageError, setSalaryPerHourMessageError] =
        useState("");
    const [isSalaryPerHourPassed, setSalaryPerHourPassed] = useState(false);
    //phone
    const [phoneMessageError, setPhoneMessageError] = useState("");
    const [isPhonePassed, setPhonePassed] = useState(false);

    useEffect(() => {
        RetrieveTeams().then((res) => {
            setTeamList(res);
        });
    }, []);

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

    function validateEmployeeSex(sex) {
        setSex(sex);
        if (sex === "Sex") {
            setSexMessageError("Sex had to be chosen");
            setSexPassed(false);
        } else {
            setSexMessageError("");
            setSexPassed(true);
            if (sex === "Male") {
                employee.sex = true;
            }

            if (sex === "Female") {
                employee.sex = false;
            }
        }
    }

    function validateEmployeeAge(employeeAge) {
        if (isNaN(Number(employeeAge))) {
            setAgeMessageError("Age has to be a number");
            setAgePassed(false);
        } else if (employeeAge < 18 || employeeAge > 60) {
            setAgeMessageError("Age has to from 18 to 60");
            setAgePassed(false);
        } else {
            setAgeMessageError("");
            setAgePassed(true);
            employee.age = employeeAge;
        }
    }

    function validateEmployeeStartDate(startDate) {
        setStartDate(startDate);
        setStartDatePassed(true);
        employee.startDate = startDate;
    }

    function validateEmployeeSalaryPerHour(salaryPerHour) {
        if (salaryPerHour.trim().length === 0) {
            setSalaryPerHourMessageError("Salary per hour can not is empty");
            setSalaryPerHourPassed(false);
        } else if (isNaN(Number(salaryPerHour))) {
            setSalaryPerHourMessageError("Salary per hour has to be a number");
            setSalaryPerHourPassed(false);
        } else {
            setSalaryPerHourMessageError("");
            setSalaryPerHourPassed(true);
            employee.salaryPerHour = salaryPerHour;
        }
    }

    function validateEmployeePhone(employeePhone) {
        var Regex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,12}\b/m;
        if (!Regex.test(employeePhone)) {
            setPhoneMessageError("Invalid phone number format");
            setPhonePassed(false);
        } else {
            setPhoneMessageError("");
            setPhonePassed(true);
            employee.phone = employeePhone;
        }
    }

    function addEmployee() {
        console.log(employee);
        if (!isNamePassed) {
            if (nameMessageError == "") {
                alert("Name can not be empty");
            } else {
                alert(nameMessageError);
            }
            return;
        }

        if (!isTeamPassed) {
            alert("Team had to be chosen");
            return;
        }

        if (!isAddressPassed) {
            if (addressMessageError == "") {
                alert("Address can not be empty");
            } else {
                alert(addressMessageError);
            }
            return;
        }

        if (!isSexPassed) {
            alert("Sex had to be chosen");
            return;
        }

        if (!isAgePassed) {
            if (ageMessageError == "") {
                alert("Age can not be empty");
            } else {
                alert(ageMessageError);
            }
            return;
        }

        if (!isSalaryPerHourPassed) {
            if (salaryPerHourMessageError == "") {
                alert("Salary per hour can not be empty");
            } else {
                alert(salaryPerHourMessageError);
            }
            return;
        }

        if (!isPhonePassed) {
            if (phoneMessageError == "") {
                alert("Phone number can not empty");
            } else {
                alert(phoneMessageError);
            }
            return;
        }

        if (
            isNamePassed &&
            isAgePassed &&
            isSalaryPerHourPassed &&
            isPhonePassed &&
            isAddressPassed &&
            isTeamPassed &&
            isSexPassed
        ) {
            AddEmployee(employee)
                .then((res) => console.log(res))
                .catch((err) => console.warn(err));
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
                            <div className="row">
                                <p className="validator col">
                                    {teamMessageError}
                                </p>
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
                                        <Dropdown.Item
                                            onClick={() => {
                                                validateEmployeeSex("Male");
                                            }}
                                        >
                                            Male
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {
                                                validateEmployeeSex("Female");
                                            }}
                                        >
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
                                    onChange={(input) => {
                                        validateEmployeeAge(input.target.value);
                                    }}
                                ></input>
                            </div>
                            <div className="form-group-start col-xs-1">
                                <p className="title"> Start day * </p>
                                <input
                                    type="date"
                                    placeholder="yyyy-MM-dd"
                                    className="form-control"
                                    value={startDate}
                                    onChange={(input) => {
                                        validateEmployeeStartDate(
                                            input.target.value
                                        );
                                    }}
                                ></input>
                            </div>
                            <p className="validator"> {ageMessageError} </p>
                        </div>
                        <div className="form-group row">
                            <div className="form-group-money-per-hour col-xs-1">
                                <p className="title"> Money / hour * </p>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter money/hour"
                                    onChange={(input) => {
                                        validateEmployeeSalaryPerHour(
                                            input.target.value
                                        );
                                    }}
                                ></input>
                                <p className="validator">
                                    {salaryPerHourMessageError}
                                </p>
                            </div>
                            <div className="form-group-phone-number col-xs-1">
                                <p className="title"> Phone number * </p>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter phone number"
                                    onChange={(input) => {
                                        validateEmployeePhone(
                                            input.target.value
                                        );
                                    }}
                                ></input>
                                <p className="validator">{phoneMessageError}</p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                addEmployee();
                                props.addNewEmployeeCallBack();
                            }}
                        >
                            SUBMIT
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-dark"
                            onClick={() => {
                                close();
                                props.addNewEmployeeCallBack();
                            }}
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
