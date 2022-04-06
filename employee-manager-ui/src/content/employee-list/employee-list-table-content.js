import { BsFillTrashFill, BsInfo } from "react-icons/bs";
import { Link } from "react-router-dom";

import EmployeeCheckStatus from "./../../model/EmployeeCheckStatus";
import { DeleteEmployee } from "../../util/GeneralFunction/EmployeeAxios";
import React, { useEffect, useState } from "react";

function EmployeeListTableContent(props) {
    //props
    const employeeList = props.employeeList;
    const employeeListComponentPageNumber = props.pageNumber;
    // state
    const [listDeleteEmployeeState, setListDeleteEmployeeState] = useState([]);
    const [pageNumber, setPageNumber] = useState(-1);
    //variable

    function callBack(pageNumber) {
        let tempPageNumber = pageNumber;
        if (employeeList.length == 0) {
            tempPageNumber = tempPageNumber - 1;
        }
        props.employeeListTableContentCallBack(tempPageNumber);
    }

    function setListDeleteEmployeeIdCallBack() {
        let listDeleteEmployeeId = [];
        for (let i = 0; i < listDeleteEmployeeState.length; i++) {
            if (listDeleteEmployeeState[i].isChecked) {
                listDeleteEmployeeId.push(
                    listDeleteEmployeeState[i].employeeId
                );
            }
        }
        props.setListDeleteEmployeeIdCallBack(listDeleteEmployeeId);
    }
    useEffect(() => {
        setListDeleteEmployeeState(initialListDeleteEmployee(employeeList));
        if (
            listDeleteEmployeeState.length === employeeList.length &&
            listDeleteEmployeeState.length !== 0
        ) {
            setPageNumber(employeeListComponentPageNumber);
        }
    }, [employeeList]);

    function initialListDeleteEmployee(employeeList) {
        let temp = [];
        for (let i = 0; i < employeeList.length; i++) {
            let employeeCheckStatus = new EmployeeCheckStatus(
                employeeList[i].id,
                false
            );
            employeeCheckStatus.employeeId = employeeList[i].id;
            temp.push(employeeCheckStatus);
        }
        return temp;
    }

    function updateListDeleteEmployee(employeeId) {
        let temp = [...listDeleteEmployeeState];
        let listDeleteEmployeeStateLength = listDeleteEmployeeState.length;
        for (let i = 0; i < listDeleteEmployeeStateLength; i++) {
            if (temp[i].employeeId === employeeId) {
                temp[i].isChecked = !temp[i].isChecked;
            }
        }
        setListDeleteEmployeeState(temp);
    }

    if (listDeleteEmployeeState.length === employeeList.length) {
        var employeeListElement = [];
        for (let i = 0; i < listDeleteEmployeeState.length; i++) {
            employeeListElement.push(
                <tr className="tbody-row" key={employeeList[i].id}>
                    <td>
                        <input
                            type="checkbox"
                            // checked= {true}
                            checked={listDeleteEmployeeState[i].isChecked}
                            onChange={() => {
                                updateListDeleteEmployee(employeeList[i].id);
                                setListDeleteEmployeeIdCallBack();
                            }}
                        ></input>
                    </td>
                    <td className="employee-id">{employeeList[i].id}</td>
                    <td className="employee-fullName">
                        {employeeList[i].fullName}
                    </td>
                    <td className="employee-phone">{employeeList[i].phone}</td>
                    <td className="employee-team">
                        {employeeList[i].teamName}
                    </td>
                    <td className="employee-detail-delete">
                        <Link to={`../employee/${employeeList[i].id}`}>
                            <BsInfo style={{ fontSize: "150%" }}></BsInfo>
                        </Link>
                        <BsFillTrashFill
                            onClick={() => {
                                DeleteEmployee([employeeList[i].id]).then(
                                    (res) => {
                                        if (res.response !== undefined) {
                                            alert(res.response.data.message);
                                        }

                                        if (res.response === undefined) {
                                            alert(
                                                "Employee was deleted successfully"
                                            );
                                            callBack(pageNumber);
                                        }
                                    }
                                );
                            }}
                        ></BsFillTrashFill>
                    </td>
                </tr>
            );
        }
    }

    return (
        <table className="table table-striped">
            <thead className="thead">
                <tr className="thead-row">
                    <th scope="col"></th>
                    <th scope="col">
                        <b>No</b>
                    </th>
                    <th scope="col">
                        <b>Full name</b>
                    </th>
                    <th scope="col">
                        <b>Phone</b>
                    </th>
                    <th scope="col">
                        <b>Team</b>
                    </th>
                    <th scope="col">
                        <b>Option</b>
                    </th>
                </tr>
            </thead>
            <tbody className="tbody">{employeeListElement}</tbody>
        </table>
    );
}

export default EmployeeListTableContent;
