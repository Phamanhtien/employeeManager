import React, { useEffect, useState } from "react";
import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";
import { useSnapshot } from "valtio";
import { useNavigate } from "react-router-dom";
import { useQuery, } from "react-query";

import EmployeeAvatar from "./employee-avatar/employee-avatar";
import EmployeeWorking from "./employee-working/employee-working";
import {
    RetrieveEmployee,
    UpdateEmployee,
    DeleteEmployee,
} from "../../util/GeneralFunction/EmployeeAxios";
import Loading from "../../util/loading/loading";
import { EmployeeState } from "../../global-states/employee-state";
import { TabIdState } from "../../global-states/tab-id-state";
import "./employee-detail.css";
import Employee from "../../model/employee";

function EmployeeDetail() {
    let pathname = window.location.pathname.split("/");
    let employeeId = pathname[pathname.length - 1];

    const employeeStateSnap = useSnapshot(EmployeeState);
    const tabIdStateSnap = useSnapshot(TabIdState);

    const { status, data } = useQuery("employeeByIdQuery", () =>
        RetrieveEmployee(employeeId)
    );

    let navigate = useNavigate();

    if (status === "loading") {
        return <Loading></Loading>;
    }

    if (EmployeeState.employee.id === undefined ){
        EmployeeState.employee = data;
        return <Loading></Loading>;
    }

    function updateEmployee(employee) {
        UpdateEmployee(employee).then((res) => {
            if (res === "") {
                alert(
                    "Updated employee has id " +
                        employeeStateSnap.employee.id +
                        " successfully"
                );
            }

            if (res === undefined) {
                alert(
                    "Update employee has id " +
                        employeeStateSnap.employee.id +
                        " failed"
                );
            }
        });
    }

    function deleteEmployee(employee) {
        DeleteEmployee([employee.id]).then((res) => {
            if (res.response !== undefined) {
                alert(res.response.data.message);
            }

            if (res.response === undefined) {
                alert("Employee was deleted successfully");
                navigate("/employee-list");
            }
        });
    }

    return (
        <div>
            <div className="content-header">
                <div className="tab-name">
                    <b>{employeeStateSnap.employee.fullName}</b>
                </div>
                <div className="icon">
                    {tabIdStateSnap.tabId === 1 ? (
                        <BsPencilSquare
                            onClick={() => {
                                updateEmployee(EmployeeState.employee);
                            }}
                        ></BsPencilSquare>
                    ) : (
                        ""
                    )}

                    <BsFillTrashFill
                        onClick={() => {
                            deleteEmployee(EmployeeState.employee);
                        }}
                    ></BsFillTrashFill>
                </div>
            </div>
            <div className="employee-detail-component">
                <EmployeeAvatar
                    className="employee-avatar"
                    employee={employeeStateSnap.employee}
                ></EmployeeAvatar>
                <EmployeeWorking
                    className="employee-working"
                    employee={employeeStateSnap.employee}
                ></EmployeeWorking>
            </div>
        </div>
    );
}

export default EmployeeDetail;
