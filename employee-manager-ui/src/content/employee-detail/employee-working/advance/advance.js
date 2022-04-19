import React, {useState, useEffect} from "react";
import { BsFillTrashFill } from "react-icons/bs";
import "./advance.css";
import { useSnapshot } from "valtio";
import { EmployeeState } from "./../../../../global-states/employee-state";
import DataGrid from "react-data-grid";
import { useQuery } from "react-query";

import AddEmployeeWorkingAdvance from "./../add-employee-working-advance/add-employee-working-advance";
import CreatePaging from "./../../../../util/GeneralFunction/CreatePaging";
import GetNumberOfAllWorkingAdvancesOfAnEmployee, {
       RetrieveAllWorkingAdvancesOfAnEmployeeWithPaging,
} from "./../../../../util/GeneralFunction/WorkingAdvanceAxios";
import Loading from "../../../../util/loading/loading";

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
        ["RetrieveAllWorkingAdvancesOfAnEmployeeWithPaging", pageNumber, isReload],
        () =>
        RetrieveAllWorkingAdvancesOfAnEmployeeWithPaging(
                employeeStateSnap.employee.id,
                pageNumber
            ),
        { keepPreviousData: true }
    );

    useEffect(() =>{
        // numberOfAllWorkingAdvanceOfAnEmployeesQuery.refetch();
        // employeeWorkingAdvanceListQuery.refetch();
    },[isReload])

    if (employeeWorkingAdvanceListQuery.status === "loading") {
        return <Loading></Loading>;
    }

    const columns = [
        { key: "id", name: "No" },
        { key: "date", name: "Date" },
        { key: "money", name: "money" },
        { key: "option", name: "Option" },
    ];

    for (let i = 0; i < employeeWorkingAdvanceListQuery.data.length; i++) {
        employeeWorkingAdvanceListQuery.data[i]["option"] = (
            <BsFillTrashFill
                onClick={() => console.log("clicked")}
            ></BsFillTrashFill>
        );
        employeeWorkingAdvanceListQuery.data[i].date = new Date(employeeWorkingAdvanceListQuery.data[i].date)
            .toISOString()
            .split("T")[0];
    }

    return (
        <div>
            <div className="advance-detail">
                <div className="head">
                    <h3>ADVANCE</h3>
                    <AddEmployeeWorkingAdvance addCallBack={addCallBack}></AddEmployeeWorkingAdvance>
                </div>
                <DataGrid
                columns={columns}
                rows={employeeWorkingAdvanceListQuery.data}
                className="table-team-working-date table table-striped"
            ></DataGrid>
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
        console.log("clicked");
        setReload((isReload) => !isReload);
    }
}

export default Advance;
