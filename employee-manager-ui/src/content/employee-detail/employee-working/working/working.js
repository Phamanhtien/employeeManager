import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useSnapshot } from "valtio";
import { EmployeeState } from "./../../../../global-states/employee-state";
import { useQuery } from "react-query";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";

import "./working.css";
import CreatePaging from "./../../../../util/GeneralFunction/CreatePaging";
import GetNumberOfAllWorkingDateOfAnEmployee, {
    RetrieveAllWorkingDateOfAnEmployeeWithPaging,
} from "./../../../../util/GeneralFunction/WorkingDateAxios";
import Loading from "../../../../util/loading/loading";
import AddEmployeeWorking from "./../add-employee-working/add-employee-working";

const gridStyle = { minHeight: 243, textAlign: "center" };

function Working() {
    const employeeStateSnap = useSnapshot(EmployeeState);

    const [pageNumber, setPageNumber] = useState(0);
    const [isReload, setReload] = useState(false);

    const numberOfAllWorkingDateOfAnEmployeesQuery = useQuery(
        ["GetNumberOfAllWorkingDateOfAnEmployee", pageNumber, isReload],
        () =>
            GetNumberOfAllWorkingDateOfAnEmployee(
                employeeStateSnap.employee.id
            ),
        { keepPreviousData: true }
    );

    const employeeWorkingListQuery = useQuery(
        ["RetrieveAllWorkingDateOfAnEmployeeWithPaging", pageNumber, isReload],
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
        { name: "id", header: "No", defaultFlex: 1 },
        { name: "date", header: "Date", defaultFlex: 1 },
        { name: "hour", header: "Hour", defaultFlex: 1 },
        { name: "option", header: "Option", defaultFlex: 1 },
    ];

    for (let i = 0; i < employeeWorkingListQuery.data.length; i++) {
        employeeWorkingListQuery.data[i]["option"] = (
            <BsFillTrashFill
                onClick={() => console.log("clicked")}
            ></BsFillTrashFill>
        );
        employeeWorkingListQuery.data[i].date = new Date(
            employeeWorkingListQuery.data[i].date
        )
            .toISOString()
            .split("T")[0];
    }

    return (
        <div className="working-detail">
            <div className="head">
                <h3>WORKING</h3>
                <AddEmployeeWorking
                    addCallBack={addCallBack}
                ></AddEmployeeWorking>
            </div>
            <ReactDataGrid
                    idProperty="id"
                    style={gridStyle}
                    className=""
                    rowClassName="tbody-row"
                    showZebraRows={true}
                    enableColumnAutosize={true}
                    rowIndexColumn
                    columns={columns}
                    dataSource={employeeWorkingListQuery.data}
                    // pageSize={5}
                    // rowsPerPageOptions={[5]}
                ></ReactDataGrid>
            <CreatePaging
                pagingCallback={pagingCallBack}
                numberOfAllEmployees={
                    numberOfAllWorkingDateOfAnEmployeesQuery.data
                }
                pageNumber={pageNumber}
            ></CreatePaging>
        </div>
    );

    function pagingCallBack(pageNumber) {
        setPageNumber(pageNumber);
    }

    function addCallBack() {
        setReload((isReload) => !isReload);
    }
}

export default Working;
