import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useSnapshot } from "valtio";
import { EmployeeState } from "./../../../../global-states/employee-state";
import DataGrid from "react-data-grid";
import { useQuery } from "react-query";

import "./working.css";
import CreatePaging from "./../../../../util/GeneralFunction/CreatePaging";
import GetNumberOfAllWorkingDateOfAnEmployee, {
    RetrieveAllWorkingDateOfAnEmployeeWithPaging,
} from "./../../../../util/GeneralFunction/WorkingDateAxios";
import Loading from "../../../../util/loading/loading";
import AddEmployeeWorking from "./../add-employee-working/add-employee-working"

function Working() {
    const employeeStateSnap = useSnapshot(EmployeeState);

    const [pageNumber, setPageNumber] = useState(0);
    const [isReload, setReload] =useState(false);

    const numberOfAllWorkingDateOfAnEmployeesQuery = useQuery(
        ["GetNumberOfAllWorkingDateOfAnEmployee", pageNumber,isReload],
        () =>
            GetNumberOfAllWorkingDateOfAnEmployee(
                employeeStateSnap.employee.id
            ),
        { keepPreviousData: true },
    );

    const employeeWorkingListQuery = useQuery(
        ["RetrieveAllWorkingDateOfAnEmployeeWithPaging", pageNumber,isReload],
        () =>
            RetrieveAllWorkingDateOfAnEmployeeWithPaging(
                employeeStateSnap.employee.id,
                pageNumber
            ),
        { keepPreviousData: true }
    );

    if (employeeWorkingListQuery.status === "loading") {
        return <Loading></Loading>;
    }

    const columns = [
        { key: "id", name: "No" },
        { key: "date", name: "Date" },
        { key: "hour", name: "Hour" },
        { key: "option", name: "Option" },
    ];

    for (let i = 0; i < employeeWorkingListQuery.data.length; i++) {
        employeeWorkingListQuery.data[i]["option"] = (
            <BsFillTrashFill
                onClick={() => console.log("clicked")}
            ></BsFillTrashFill>
        );
        employeeWorkingListQuery.data[i].date = new Date(employeeWorkingListQuery.data[i].date)
            .toISOString()
            .split("T")[0];
    }

    // console.log(data)
    return (
        <div className="working-detail">
            <div className="head">
                <h3>WORKING</h3>
                <AddEmployeeWorking addCallBack={addCallBack}></AddEmployeeWorking>
            </div>
            <DataGrid
                columns={columns}
                rows={employeeWorkingListQuery.data}
                className="table-team-working-date table table-striped"
            ></DataGrid>
            {/* <DataGrid columns={columns} rows={rows} />; */}
            <CreatePaging
                pagingCallback={pagingCallBack}
                numberOfAllEmployees={numberOfAllWorkingDateOfAnEmployeesQuery.data}
                pageNumber={pageNumber}
            ></CreatePaging>
        </div>
    );

    function pagingCallBack(pageNumber) {
        setPageNumber(pageNumber);
    }

    function addCallBack() {
        setReload(isReload=>!isReload);
    }
}

export default Working;
