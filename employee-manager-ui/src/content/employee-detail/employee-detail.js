import React, { useEffect } from "react";
import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";
import { useSnapshot } from "valtio";
import { useNavigate } from 'react-router-dom';

import EmployeeAvatar from "./employee-avatar/employee-avatar";
import EmployeeWorking from "./employee-working/employee-working";
import {
    RetrieveEmployee,
    UpdateEmployee,
    DeleteEmployee,
} from "../../util/GeneralFunction/EmployeeAxios";
import Loading from "../../util/loading/loading";
import { EmployeeState } from "../../global-states/employee-state";
import Employee from "../../model/employee";
import "./employee-detail.css";

function EmployeeDetail() {
    const employeeStateSnap = useSnapshot(EmployeeState);
    let pathname = window.location.pathname.split("/");
    let employeeId = pathname[pathname.length - 1];
    let navigate = useNavigate();
    useEffect(() => {
        if (employeeStateSnap.employee.id !== undefined) {
            return;
        }
        RetrieveEmployee(employeeId).then((res) => {
            EmployeeState.employee = res;
        });
    });

    if (employeeStateSnap.employee.id === undefined) {
        return <Loading></Loading>;
    }

    function updateEmployee(employee) {
        console.log(employee.address);
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
                navigate('/employee-list')
                EmployeeState = new Employee()
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
                    <BsPencilSquare
                        onClick={() => {
                            updateEmployee(EmployeeState.employee);
                        }}
                    ></BsPencilSquare>
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
