import React, { useState, useEffect } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import "./advance.css";
import { useSnapshot } from "valtio";
import { EmployeeState } from "./../../../../global-states/employee-state";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import { useQuery } from "react-query";

import AddEmployeeWorkingAdvance from "./../add-employee-working-advance/add-employee-working-advance";
import CreatePaging from "./../../../../util/GeneralFunction/CreatePaging";
import GetNumberOfAllWorkingAdvancesOfAnEmployee, {
    RetrieveAllWorkingAdvancesOfAnEmployeeWithPaging,
} from "./../../../../util/GeneralFunction/WorkingAdvanceAxios";
import Loading from "../../../../util/loading/loading";

const gridStyle = { minHeight: 243, textAlign: "center" };

function Advance() {
    const employeeStateSnap = useSnapshot(EmployeeState);

    const [pageNumber, setPageNumber] = useState(0);
    const [isReload, setReload] = useState(false);

    const numberOfAllWorkingAdvanceOfAnEmployeesQuery = useQuery(
        ["GetNumberOfAllWorkingAdvancesOfAnEmployee", pageNumber, isReload],
        () =>
            GetNumberOfAllWorkingAdvancesOfAnEmployee(
                employeeStateSnap.employee.id
            ),
        { keepPreviousData: true }
    );

    const employeeWorkingAdvanceListQuery = useQuery(
        [
            "RetrieveAllWorkingAdvancesOfAnEmployeeWithPaging",
            pageNumber,
            isReload,
        ],
        () =>
            RetrieveAllWorkingAdvancesOfAnEmployeeWithPaging(
                employeeStateSnap.employee.id,
                pageNumber
            ),
        { keepPreviousData: true }
    );

    if (employeeWorkingAdvanceListQuery.status === "loading") {
        return <Loading></Loading>;
    }

    const columns = [
        { name: "id", header: "No", defaultFlex: 1 },
        { name: "date", header: "Date", defaultFlex: 1 },
        { name: "money", header: "Money", defaultFlex: 1 },
        { name: "option", header: "Option", defaultFlex: 1 },
    ];

    for (let i = 0; i < employeeWorkingAdvanceListQuery.data.length; i++) {
        employeeWorkingAdvanceListQuery.data[i]["option"] = (
            <BsFillTrashFill
                onClick={() => console.log("clicked")}
            ></BsFillTrashFill>
        );
        employeeWorkingAdvanceListQuery.data[i].date = new Date(
            employeeWorkingAdvanceListQuery.data[i].date
        )
            .toISOString()
            .split("T")[0];
    }

    return (
        <div>
            <div className="advance-detail">
                <div className="head">
                    <h3>ADVANCE</h3>
                    <AddEmployeeWorkingAdvance
                        addCallBack={addCallBack}
                    ></AddEmployeeWorkingAdvance>
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
                    dataSource={employeeWorkingAdvanceListQuery.data}
                    // pageSize={5}
                    // rowsPerPageOptions={[5]}
                ></ReactDataGrid>
                <CreatePaging
                    pagingCallback={pagingCallBack}
                    numberOfAllEmployees={
                        numberOfAllWorkingAdvanceOfAnEmployeesQuery.data
                    }
                    pageNumber={pageNumber}
                ></CreatePaging>
            </div>
        </div>
    );

    function pagingCallBack(pageNumber) {
        setPageNumber(pageNumber);
    }

    function addCallBack() {
        setReload((isReload) => !isReload);
    }
}

export default Advance;
