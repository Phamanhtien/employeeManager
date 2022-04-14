import React, { useEffect, useState } from "react";
import { BsFillPlusCircleFill, BsFillTrashFill } from "react-icons/bs";
import { useSnapshot } from "valtio";
import { EmployeeState } from "./../../../../global-states/employee-state";
import DataGrid from 'react-data-grid';

import "./working.css";
import CreatePaging from "./../../../../util/GeneralFunction/CreatePaging";
import GetNumberOfAllWorkingDateOfAnEmployee, { RetrieveAllWorkingDateOfAnEmployeeWithPaging } from "./../../../../util/GeneralFunction/WorkingDateAxios";

function Working() {
    const employeeStateSnap = useSnapshot(EmployeeState);
    const [numberOfAllEmployees, setNumberOfAllEmployees] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [employeeWorkingList, setEmployeeWorkingList] = useState([]);
    useEffect(() => {
        GetNumberOfAllWorkingDateOfAnEmployee(employeeStateSnap.employee.id)
            .then((res) => setNumberOfAllEmployees(res))
            .catch((error) => console.log(error));
        RetrieveAllWorkingDateOfAnEmployeeWithPaging(
            employeeStateSnap.employee.id,
            pageNumber
        )
            .then((res) => setEmployeeWorkingList(res))
            .catch((error) => console.log(error));
    }, [pageNumber]);

    // const columns = [
    //     {key: 'id', name:"No"},
    //     {key: 'date', name:"Date"},
    //     {key: 'hour', name:"Hour"},
    //     {key: 'option', name:"Option"}
    // ]

    const columns = [
        { key: 'id', name: 'ID' },
        { key: 'title', name: 'Title' }
      ];
      
      const rows = [
        { id: 0, title: 'Example' },
        { id: 1, title: 'Demo' }
      ];
    return (
        <div className="working-detail">
            <div className="head">
                <h3>WORKING</h3>
                <BsFillPlusCircleFill></BsFillPlusCircleFill>
            </div>
            {/* <DataGrid columns={columns} rows={employeeWorkingList}></DataGrid> */}
            <DataGrid columns={columns} rows={rows} />;
            <table className="table-team-working-date table table-striped">
                <thead className="thead">
                    <tr className="thead-row">
                        <th scope="col">
                            <b>No</b>
                        </th>
                        <th scope="col">
                            <b>Date</b>
                        </th>
                        <th scope="col">
                            <b>Hour</b>
                        </th>
                        <th scope="col">
                            <b>Option</b>
                        </th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    <tr className="tbody-row">
                        <td className="team-id">1</td>
                        <td className="team-name">22/03/2022</td>
                        <td className="team-phone">3</td>
                        <td className="team-address">
                            <BsFillTrashFill></BsFillTrashFill>
                        </td>
                    </tr>
                </tbody>
            </table>
            <CreatePaging
                pagingCallback={pagingCallBack}
                numberOfAllEmployees={numberOfAllEmployees}
                pageNumber={pageNumber}
            ></CreatePaging>
        </div>
    );

    function pagingCallBack(pageNumber) {
        setPageNumber(pageNumber);
    }
}

export default Working;
