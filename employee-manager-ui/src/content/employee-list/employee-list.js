import React, { useEffect, useState } from "react";
import { BsPlusCircleFill, BsFillTrashFill } from "react-icons/bs";

import search from "./../../assets/icon/search.svg";
import CreatePaging from "../../util/GeneralFunction/CreatePaging";
import GetNumberOfAllEmployee, {
    RetrieveAllEmployeeWithPaging,
    RetrieveEmployeeByNameWithoutPaging,
    RetrieveEmployeeByNameWithPaging
} from "../../util/GeneralFunction/EmployeeAxios";
import EmployeeListTableContent from "./employee-list-table-content";
import "./employee-list.css";

function EmployeeList() {
    const [numberOfAllEmployees, setNumberOfAllEmployees] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [employeeList, setEmployeeList] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        if (!isLoaded) {
            if (searchName === "") {
                GetNumberOfAllEmployee().then((res) => {
                    setNumberOfAllEmployees(res);
                });

                RetrieveAllEmployeeWithPaging(pageNumber).then((res) => {
                    setEmployeeList(res);
                    setLoaded(true);
                });
            }

            if (searchName !== "") {
                RetrieveEmployeeByNameWithoutPaging(searchName).then((res) => {
                    setNumberOfAllEmployees(res);
                });
                RetrieveEmployeeByNameWithPaging(searchName, pageNumber).then(
                    (res) => {
                        setEmployeeList(res);
                        setLoaded(true);
                    }
                );
            }
        }
    });

    return (
        <div>
            <div className="employee-list-content-header">
                <div className="tab-name">
                    <b>Employee</b>
                </div>
                <div className="icon">
                    <BsPlusCircleFill></BsPlusCircleFill>
                    <BsFillTrashFill></BsFillTrashFill>
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
                            <img src={search}></img>
                        </span>
                        <input
                            className="form-control"
                            onChange={(input) => {
                                setSearchName(input.target.value);
                                setLoaded(false);
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
                EmployeeListTableContentCallBack={
                    EmployeeListTableContentCallBack
                }
                employeeList={employeeList}
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
        setLoaded(false);
    }

    function EmployeeListTableContentCallBack() {
        setLoaded(false);
    }
}

export default EmployeeList;
