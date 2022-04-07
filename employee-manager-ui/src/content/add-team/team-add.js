import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { BsPlusCircleFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import "./team-add.css";
import Team from "../../model/team";
import { AddTeam } from "../../util/GeneralFunction/TeamAxios"
import { RetrieveEmployeeByNameWithoutPaging } from "../../util/GeneralFunction/EmployeeAxios";

function TeamAdd() {
    const [employeeList, setEmployeeList] = useState([]);
    //team
    const [team, setTeam] = useState(new Team());
    //team name
    const [teamNameLength, setTeamNameLength] = useState(0);
    const [teamNameMessageError, setTeamNameMessageError] = useState("");
    const [isTeamNamePassed, setTeamNamePassed] = useState(false);
    //manager
    const [managerName, setManagerName] = useState("");
    const [teamManagerMessageError, setTeamManagerMessageError] = useState("");
    const [isTeamManagerPassed, setTeamManagerPassed] = useState(false);
    const [employeeListElementDisplay, setEmployeeListElementDisplay] =
        useState("");
    //display list
    // const [employeeListElement, setEmployeeListElement] = useState([])

    useEffect(() => {
        if (managerName.length < 3) {
            setEmployeeList([]);
        }
        if (managerName.length >= 3) {
            RetrieveEmployeeByNameWithoutPaging(managerName).then((res) => {
                setEmployeeList(res);
            });
        }
    }, [managerName]);

    function validateTeamName(teamName) {
        setTeamNameLength(teamName.length);
        if (teamName == "") {
            setTeamNameMessageError("Team name can not be empty");
            setTeamNamePassed(false);
        } else {
            setTeamNameMessageError("");
            setTeamNamePassed(true);
            team.name = teamName;
        }
    }

    function validateTeamManager(managerName, managerId) {
        setTeamNameLength(managerName.length);
        if (managerName == "") {
            setTeamManagerMessageError("Team manager had to be choosen");
            setTeamManagerPassed(false);
            setManagerName(managerName);
        } else {
            setTeamManagerMessageError("");
            setTeamManagerPassed(true);
            setManagerName(managerName);
        }
    }

    function addTeam() {
        if (!isTeamNamePassed) {
            if (teamNameMessageError === "") {
                alert("Team name can not be empty");
            }

            if (teamNameMessageError !== "") {
                alert(teamManagerMessageError);
            }
            return;
        }

        if (!isTeamManagerPassed) {
            if (teamManagerMessageError === "") {
                alert("Team manager had to be choosen");
            }

            if (teamManagerMessageError !== "") {
                alert(teamManagerMessageError);
            }
            return;
        }
        AddTeam(team).then((res)=> {
            if(res.message === undefined) {
                alert("Success");
            } else {
                alert(res.message)
            }
        })
        
    }

    var employeeListElement = [];
    for (let i = 0; i < employeeList.length; i++) {
        employeeListElement.push(
            <ListGroup.Item
                key = {employeeList[i].id}
                action
                variant="primary"
                className={employeeListElementDisplay}
                onClick={() => {
                    setManagerName(employeeList[i].fullName.trim());
                    setEmployeeListElementDisplay("employeeListElement");
                    team.managerId = employeeList[i].id;
                    console.log(managerName);
                }}
            >
                {employeeList[i].fullName}
            </ListGroup.Item>
        );
    }

    return (
        <Popup
            position="middle center"
            modal
            nested
            trigger={
                <button>
                    <BsPlusCircleFill></BsPlusCircleFill>
                </button>
            }
        >
            {(close) => (
                <div className="team-add-modal">
                    <div className="modal-header">
                        <h4 className="modal-title">Add new Team</h4>
                    </div>
                    <div className="modal-body">
                        <div className="form-group form-group-name">
                            <p className="title">Team name</p>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter name"
                                onChange={(input) => {
                                    validateTeamName(input.target.value);
                                }}
                            ></input>
                            <div className="row">
                                <p className="validator col">
                                    {teamNameMessageError}
                                </p>
                                <p className="name-length-per-max col">
                                    {teamNameLength}/225
                                </p>
                            </div>
                        </div>
                        <div className="form-group form-group-team">
                            <p className="title">Team manager *</p>
                            <div className="drop-down">
                                <div className="drop-down">
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={managerName}
                                        onClick={() =>
                                            setEmployeeListElementDisplay("")
                                        }
                                        onChange={(input) => {
                                            validateTeamManager(
                                                input.target.value
                                            );
                                        }}
                                    ></input>
                                    {employeeListElement}
                                </div>
                            </div>
                            <p className="validator col">
                                {teamManagerMessageError}
                            </p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                addTeam();
                            }}
                        >
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

export default TeamAdd;
