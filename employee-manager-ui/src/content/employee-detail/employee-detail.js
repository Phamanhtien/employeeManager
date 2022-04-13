import React, { useState, useEffect } from 'react';
import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs';

import EmployeeAvatar from './employee-avatar/employee-avatar';
import EmployeeWorking from './employee-working/employee-working';
import { RetrieveEmployee } from "../../util/GeneralFunction/EmployeeAxios";
import Loading from "../../util/loading/loading";
import './employee-detail.css'

function EmployeeDetail() {
    const [employee, setEmployee] = useState();
    let pathname = window.location.pathname.split("/");
    let employeeId = pathname[pathname.length - 1];
    useEffect(() => {
        if (employee !== undefined) {
            return;
        }
        RetrieveEmployee(employeeId).then((res) => setEmployee(res));
        console.log(employee);
    });

    if (employee === undefined) {
        return (
            <Loading></Loading>
        )
    }

    return (
        <div>
            <div className="content-header">
                <div className="tab-name">
                    <b>{employee.fullName}</b>
                </div>
                <div className="icon">
                    <BsPencilSquare></BsPencilSquare>
                    <BsFillTrashFill></BsFillTrashFill>
                </div>
            </div>
            <div className="employee-detail-component">
                <EmployeeAvatar className="employee-avatar" employee={employee}></EmployeeAvatar>
                <EmployeeWorking className= "employee-working" employee={employee}></EmployeeWorking>
            </div>
        </div>
    )
}



export default EmployeeDetail