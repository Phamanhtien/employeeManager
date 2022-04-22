import { BsFillTrashFill, BsInfo } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReactDataGrid from "@inovua/reactdatagrid-enterprise";
import "@inovua/reactdatagrid-enterprise/index.css";

import EmployeeCheckStatus from "./../../model/EmployeeCheckStatus";
import { DeleteEmployee } from "../../util/GeneralFunction/EmployeeAxios";
import React, { useEffect, useState } from "react";

const gridStyle = { minHeight: 243, textAlign: "center" };

function EmployeeListTableContent(props) {
    //props
    let employeeList = props.employeeList;
    const employeeListComponentPageNumber = props.pageNumber;
    // state
    const [listDeleteEmployeeState, setListDeleteEmployeeState] = useState([]);
    const [pageNumber, setPageNumber] = useState(-1);
    const [isStateChanged, setStateChanged] = useState(false);
    //variable

    function callBack(pageNumber) {
        let tempPageNumber = pageNumber;
        if (employeeList.length === 0) {
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
        setStateChanged(false);
        if (
            listDeleteEmployeeState.length === employeeList.length &&
            listDeleteEmployeeState.length !== 0
        ) {
            setPageNumber(employeeListComponentPageNumber);
        }
    }, [
        employeeList,
        isStateChanged,
        employeeListComponentPageNumber,
        listDeleteEmployeeState.length,
    ]);

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

    if (listDeleteEmployeeState.length !== employeeList.length) {
        return;
    }

    const columns = [
        { name: "checkbox", header: "", defaultFlex: 1 },
        { name: "id", header: "No", defaultFlex: 2 },
        { name: "fullName", header: "Full Name", defaultFlex: 2 },
        { name: "phone", header: "Phone", defaultFlex: 2 },
        { name: "teamName", header: "Team", defaultFlex: 2 },
        { name: "option", header: "Option", defaultFlex: 2 },
    ];

    for (let i = 0; i < employeeList.length; i++) {
        employeeList[i]["checkbox"] = (
            <input
                type="checkbox"
                // checked= {true}
                checked={listDeleteEmployeeState[i].isChecked}
                onChange={() => {
                    updateListDeleteEmployee(employeeList[i].id);
                    setListDeleteEmployeeIdCallBack();
                }}
            ></input>
        );

        employeeList[i]["option"] = (
            <div>
                <Link to={`../employee/${employeeList[i].id}`}>
                    <BsInfo style={{ fontSize: "150%" }}></BsInfo>
                </Link>
                <BsFillTrashFill
                    onClick={async () => {
                        await DeleteEmployee([employeeList[i].id]).then(
                            (res) => {
                                if (res.response !== undefined) {
                                    alert(res.response.data.message);
                                }

                                if (res.response === undefined) {
                                    alert("Employee was deleted successfully");
                                }
                            }
                        );
                        employeeList.pop(employeeList[i].id);
                        callBack(pageNumber);
                        setStateChanged(true);
                    }}
                ></BsFillTrashFill>
            </div>
        );
    }

    return (
        <div>
            <ReactDataGrid
                idProperty="id"
                style={gridStyle}
                className=""
                rowClassName="tbody-row"
                showZebraRows={true}
                enableColumnAutosize={true}
                // rowIndexColumn
                columns={columns}
                dataSource={employeeList}
                // pageSize={5}
                // rowsPerPageOptions={[5]}
            ></ReactDataGrid>
            {/* <table className="table table-striped">
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
            </table> */}
        </div>
    );
}

export default EmployeeListTableContent;
