import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import search from "./../../assets/icon/search.svg";
import CreatePaging from "../../util/GeneralFunction/CreatePaging";
import GetNumberOfAllEmployee, {
    RetrieveAllEmployeeWithPaging,
    GetNumberOfEmployeeByNameWithoutPaging,
    RetrieveEmployeeByNameWithPaging,
} from "../../util/GeneralFunction/EmployeeAxios";
import EmployeeListTableContent from "./employee-list-table-content";
import EmployeeDeleteList from "./../employee-delete-list/employee-delete-list";
import EmployeeAdd from "./../employee-add/employee-add";
import { EmployeeState } from "../../global-states/employee-state";
import Employee from "./../../model/employee";
import "./employee-list.css";
import Loading from "../../util/loading/loading";

function EmployeeList() {
    // useState
    const [numberOfAllEmployees, setNumberOfAllEmployees] = useState(-1);
    const [pageNumber, setPageNumber] = useState(0);
    const [employeeList, setEmployeeList] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [listDeleteEmployeeId, setListDeleteEmployeeId] = useState([]);
    const [isReload, setIsReload] = useState(false);

    // useQuery
    const getNumberOfAllEmployee = useQuery(
        ["getNumberOfAllEmployee"],
        () => GetNumberOfAllEmployee(),
        {
            enabled: false,
        }
    );

    const retrieveAllEmployeeWithPaging = useQuery(
        ["RetrieveAllEmployeeWithPaging", pageNumber],
        () => RetrieveAllEmployeeWithPaging(pageNumber),
        {
            enabled: false,
        }
    );

    const getNumberOfEmployeeByNameWithoutPaging = useQuery(
        ["GetNumberOfEmployeeByNameWithoutPaging", searchName],
        () => GetNumberOfEmployeeByNameWithoutPaging(searchName),
        {
            enabled: false,
        }
    );

    const retrieveEmployeeByNameWithPaging = useQuery(
        ["RetrieveEmployeeByNameWithPaging",searchName,pageNumber],
        () => RetrieveEmployeeByNameWithPaging(searchName,pageNumber),
        { 
            enabled: false,
        }
    )

    useEffect(() => {
        if (searchName === "") {
            console.log("á");
            getNumberOfAllEmployee.refetch();
            if (getNumberOfAllEmployee.status === "success") {
                setNumberOfAllEmployees(getNumberOfAllEmployee.data);
            }
            retrieveAllEmployeeWithPaging.refetch();
            if (retrieveAllEmployeeWithPaging.status === "success") {
                setEmployeeList(retrieveAllEmployeeWithPaging.data);
            }
        }

        if (searchName !== "") {
            console.log("đã có chữ trong search");
            getNumberOfEmployeeByNameWithoutPaging.refetch();
            if (getNumberOfEmployeeByNameWithoutPaging.status === "success") {
                setNumberOfAllEmployees(
                    getNumberOfEmployeeByNameWithoutPaging.data
                );
            }
            retrieveEmployeeByNameWithPaging.refetch();
            if(retrieveEmployeeByNameWithPaging.status === "success") {
                setEmployeeList(retrieveEmployeeByNameWithPaging.data)
            }
        }
    }, [
        pageNumber,
        searchName,
        isReload,
        getNumberOfAllEmployee.status,
        retrieveAllEmployeeWithPaging.status,
        getNumberOfEmployeeByNameWithoutPaging.status,
        retrieveEmployeeByNameWithPaging.status,
    ]);

    EmployeeState.employee = new Employee();

    if (retrieveAllEmployeeWithPaging.data === undefined) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div className="employee-list-content-header">
                <div className="tab-name">
                    <b>Employee</b>
                </div>
                <div className="icon">
                    <EmployeeAdd
                        addNewEmployeeCallBack={addNewEmployeeCallBack}
                    ></EmployeeAdd>
                    <EmployeeDeleteList
                        employeeDeleteListCallBack={employeeDeleteListCallBack}
                        listDeleteEmployeeId={listDeleteEmployeeId}
                    ></EmployeeDeleteList>
                </div>
            </div>

            <div className="content-team">
                <div className="total-employee-box">
                    <p className="total-employee-text">
                        Total {numberOfAllEmployees} employees
                    </p>
                </div>
                <div>
                    <div className="search-container input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                            <img src={search} alt="search-icon"></img>
                        </span>
                        <input
                            className="form-control"
                            onChange={(input) => {
                                setSearchName(input.target.value);
                                setPageNumber(0);
                            }}
                            placeholder="Search employee by name"
                            type="text"
                            value={searchName}
                        ></input>
                    </div>
                </div>
                <div className="space"></div>
            </div>
            <div className="search-result">
                <p>Search result</p>
            </div>
            <EmployeeListTableContent
                employeeListTableContentCallBack={
                    employeeListTableContentCallBack
                }
                setListDeleteEmployeeIdCallBack={
                    setListDeleteEmployeeIdCallBack
                }
                employeeList={employeeList}
                pageNumber={pageNumber}
            ></EmployeeListTableContent>
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

    function employeeListTableContentCallBack(page) {
        setPageNumber(page);
    }

    function setListDeleteEmployeeIdCallBack(listDeleteEmployeeById) {
        setListDeleteEmployeeId(listDeleteEmployeeById);
        console.log(listDeleteEmployeeById);
    }

    function addNewEmployeeCallBack() {
        setIsReload(!isReload);
        setPageNumber(pageNumber);
    }

    function employeeDeleteListCallBack() {
        setPageNumber(0);
    }
}

export default EmployeeList;
