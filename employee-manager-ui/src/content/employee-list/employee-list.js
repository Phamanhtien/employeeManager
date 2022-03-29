import { BsPlusCircleFill, BsFillTrashFill, BsInfo } from 'react-icons/bs';
import search from './../../assets/icon/search.svg';
import './employee-list.css'

function EmployeeList() {
    return (
        <div>
            <div class="content-header">
                <div class="tab-name">
                    <b>Employee</b>
                </div>
                <div class="icon">
                    <BsPlusCircleFill></BsPlusCircleFill>
                    <BsFillTrashFill></BsFillTrashFill>
                </div>
            </div>

            <div class="content-team">
                <div class="total-employee-box">
                    <p class="total-employee-text">Total 6 employees</p>
                </div>
                <div>
                    <div class="search-container input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">
                            <img src={search}></img>
                        </span>
                        <input class="form-control" placeholder="Search employee by name" type="text"></input>
                    </div>
                </div>
                <div class="space"></div>
            </div>
            <div class="search-result">
                    <p>Search result</p>
                </div>

            <table class="table table-striped">
                <thead class="thead">
                    <tr class="thead-row">
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

                <tbody class="tbody">
                    <tr class="tbody-row" >
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td class="employee-id">1</td>
                        <td class="employee-fullName">Phạm Anh Tiến</td>
                        <td class="employee-phone">0353858859</td>
                        <td class="employee-team">team này của Tiến</td>
                        <td class="employee-detail-delete">
                            <a href="employee-detail/1">
                                <BsInfo style={{ fontSize: '150%' }}></BsInfo>
                            </a>
                            <BsFillTrashFill></BsFillTrashFill>
                        </td>
                    </tr>
                </tbody>
            </table>

            <ul class="pagination pagination-sm">
                <li class="page-item">
                    <a href='#' class="page-link">Previous</a>
                </li>
                <li >
                    <a href='#' class="page-link">1</a>
                </li>
                <li>
                    <a href='#' class="page-link" >Next</a>
                </li>
            </ul>
        </div>
    );
}

export default EmployeeList