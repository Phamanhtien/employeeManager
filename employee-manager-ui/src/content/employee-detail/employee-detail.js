import React, { useState, useEffect } from "react";
import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

import EmployeeAvatar from "./employee-avatar/employee-avatar";
import EmployeeWorking from "./employee-working/employee-working";
import { RetrieveEmployee } from "../../util/GeneralFunction/EmployeeAxios";
import Loading from "../../util/loading/loading";
import "./employee-detail.css";
import { selectEmployee,setEmployee } from "../../store/employee-slice";

function EmployeeDetail() {
    const e = useSelector(selectEmployee);
    const [employee, setEmployee] = useState();
    let pathname = window.location.pathname.split("/");
    let employeeId = pathname[pathname.length - 1];

    
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        console.log(e);
        if (employee !== undefined) {
            return;
        }
        RetrieveEmployee(employeeId).then((res) => {
            setEmployee(res);
            dispatch(setEmployee(res))
            
        });
        // console.log(employee);
    },[employee]);

    if (employee === undefined) {
        return <Loading></Loading>;
    }

    return (
        <div>
            {e.teamId}
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
                <EmployeeAvatar
                    className="employee-avatar"
                    employee={employee}
                ></EmployeeAvatar>
                <EmployeeWorking
                    className="employee-working"
                    employee={employee}
                ></EmployeeWorking>
            </div>
        </div>
    );
}

export default EmployeeDetail;
