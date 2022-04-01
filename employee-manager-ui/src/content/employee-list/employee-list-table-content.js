import { BsFillTrashFill, BsInfo } from "react-icons/bs";
import { Link } from "react-router-dom";

import EmployeeCheckStatus from "./../../model/EmployeeCheckStatus";
import { DeleteEmployee } from "../../util/GeneralFunction/EmployeeAxios";
import React, { useEffect, useState } from "react";

function EmployeeListTableContent(props) {
    //props
    const employeeList = props.employeeList;
    // state
    const [listDeleteEmployeeState, setListDeleteEmployeeState] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    //variable
    const listDeleteEmployee = [];

    function callBack() {
        props.EmployeeListTableContentCallBack();
    }

    useEffect(() => {
        if (listDeleteEmployeeState.length === 0) {
            setListDeleteEmployeeState(initialListDeleteEmployee(employeeList))
            console.log(listDeleteEmployeeState);
        }
        console.log("this is employeeList")
        console.log(employeeList);
        console.log(listDeleteEmployeeState);
        
    });

    console.log("---------------------------------------------------------------------")
    function initialListDeleteEmployee(employeeList) {
        let temp = [];
        for (let i = 0; i < employeeList.length; i++) {
            let employeeCheckStatus = EmployeeCheckStatus;
            employeeCheckStatus.employeeId = employeeList[i].id;
            console.log(employeeCheckStatus)
            console.log("temp in function")
            console.log(temp)
            temp.push(employeeCheckStatus);
            
        }
        console.log('this is temp')
        console.log(temp)
        return temp;
    }
    initialListDeleteEmployee(employeeList)
    const employeeListElement = [];
    // for (let i = 0; i < listDeleteEmployeeState.length; i++) {
    //     employeeListElement.push(
    //         <tr className="tbody-row" key={employeeList[i].id}>
    //             <td>
    //                 {/* <input
    //                     type="checkbox"
    //                     checked={listDeleteEmployeeState[i].isChecked}
    //                     onChange={() => {
    //                         listDeleteEmployeeState[i].isChecked =
    //                             !listDeleteEmployeeState[i].isChecked;
    //                     }}
    //                 ></input> */}
    //                 <input type="checkbox" checked={listDeleteEmployeeState[i].isChecked}></input>
    //             </td>
    //             <td className="employee-id">{employeeList[i].id}</td>
    //             <td className="employee-fullName">
    //                 {employeeList[i].fullName}
    //             </td>
    //             <td className="employee-phone">{employeeList[i].phone}</td>
    //             <td className="employee-team">{employeeList[i].teamName}</td>
    //             <td className="employee-detail-delete">
    //                 <Link to={`../employee/${employeeList[i].id}`}>
    //                     <BsInfo style={{ fontSize: "150%" }}></BsInfo>
    //                 </Link>
    //                 <BsFillTrashFill
    //                     onClick={() => {
    //                         DeleteEmployee([employeeList[i].id]).then((res) => {
    //                             if (res.response !== undefined) {
    //                                 alert(res.response.data.message);
    //                             }

    //                             if (res.response === undefined) {
    //                                 alert("Employee was deleted successfully");
    //                                 callBack();
    //                             }
    //                         });
    //                     }}
    //                 ></BsFillTrashFill>
    //             </td>
    //         </tr>
    //     );
    // }

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
