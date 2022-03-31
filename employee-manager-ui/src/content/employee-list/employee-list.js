import React, { useEffect, useState } from 'react';
import { BsPlusCircleFill, BsFillTrashFill, BsInfo } from 'react-icons/bs';
import axios from 'axios';
import { Link } from 'react-router-dom';

import search from './../../assets/icon/search.svg';
import Loading from './../../util/loading/loading';
import CreatePaging from '../../util/GeneralFunction/CreatePaging';
import './employee-list.css'

function EmployeeList () {

    const [numberOfAllEmployees, setNumberOfAllEmployees] = useState(0);

    const [pageNumber, setPageNumber] = useState(0);

    const [employeeList, setEmployeeList] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    const [searchName, setSearchName] = useState("");

    useEffect (() => {
        if (!isLoaded) {
            if (searchName === "") {
                getNumberOfAllEmployee();
                retrieveAllEmployeeWithPaging();
            }

            if (searchName !== "") {
                retrieveEmployeeByNameWithoutPaging();
                retrieveEmployeeByNameWithPaging();
            }
        }
    })

    const employeeListElement = [];
    for(let i = 0; i < employeeList.length; i++) {
        employeeListElement.push(
            <tr className="tbody-row" key={employeeList[i].id}>
                <td><input type="checkbox"></input></td>
                <td className="employee-id">{employeeList[i].id}</td>
                <td className="employee-fullName">{employeeList[i].fullName}</td>
                <td className="employee-phone">{employeeList[i].phone}</td>
                <td className="employee-team">{employeeList[i].teamName}</td>
                <td className="employee-detail-delete">
                    <Link to={`../employee/${employeeList[i].id}`}>
                        <BsInfo style={{ fontSize: '150%' }}></BsInfo>
                    </Link>
                    <BsFillTrashFill></BsFillTrashFill>
                </td>
            </tr>
        )
    }

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
                        <p className="total-employee-text">Total {numberOfAllEmployees} employees</p>
                    </div>
                    <div>
                        <div className="search-container input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">
                                <img src={search}></img>
                            </span>
                            <input className="form-control" onChange={(input)=>{setSearchName(input.target.value);setLoadedStateToInitialLoading();setPageNumber(0)}} placeholder="Search employee by name" type="text" value={searchName}></input>
                        </div>
                    </div>
                    <div className="space"></div>
                </div>
                <div className="search-result">
                    <p>Search result</p>
                </div>
    
                <table className="table table-striped">
                    <thead className="thead">
                        <tr className="thead-row">
                            <th scope="col">
                            </th>
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
    
                    <tbody className="tbody">
                        {employeeListElement}
                    </tbody>
                </table>
                <CreatePaging pagingCallback={pagingCallBack} numberOfAllEmployees={numberOfAllEmployees} pageNumber={pageNumber}></CreatePaging>
            </div>
        )
    
    function pagingCallBack (pageNumber) {
        setPageNumber(pageNumber)
        setLoaded(false)
    }

    function getNumberOfAllEmployee() {
        axios.get('http://localhost:8080/employee/all').then(res => {
        setNumberOfAllEmployees(res.data);
      })
      .catch(error => console.error(error));
    }

    function retrieveAllEmployeeWithPaging() {
        axios.get('http://localhost:8080/employee/all/'+ pageNumber).then(res => {
            setEmployeeList(res.data);
            setLoaded(true);
          })
        .catch(error => console.log(error));
    }

    function retrieveEmployeeByNameWithoutPaging() {
        axios.get('http://localhost:8080/employee/search/'+searchName).then(res => {
            setNumberOfAllEmployees(res.data);
          })
        .catch(error => {console.log(error)});
    }

    function retrieveEmployeeByNameWithPaging() {
        axios.get('http://localhost:8080/employee/search/'+searchName+"/"+pageNumber).then(res => {
            setEmployeeList(res.data);
            setLoaded(true);
            console.log(employeeList)
          })
        .catch(error => {console.log(error)});
    }

    function setLoadedStateToInitialLoading() {
        setLoaded(false);
    }
}

export default EmployeeList