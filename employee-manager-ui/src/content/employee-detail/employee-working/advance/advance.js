import React from 'react';
import { BsFillPlusCircleFill, BsFillTrashFill } from 'react-icons/bs';
import './advance.css'

class Advance extends React.Component {
    render() {
        return (
            <div>
                <div class="advance-detail">
                    <div class="head">
                        <h3>
                            ADVANCE
                        </h3>
                        <BsFillPlusCircleFill></BsFillPlusCircleFill>
                    </div>
                    <table class="table-team-working-date table table-striped">
                        <thead class="thead">
                            <tr class="thead-row">
                                <th scope="col">
                                    <b>No</b>
                                </th>
                                <th scope="col">
                                    <b>Date</b>
                                </th>
                                <th scope="col">
                                    <b>Money</b>
                                </th>
                                <th scope="col">
                                    <b>Option</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="tbody">
                            <tr class="tbody-row">
                                <td class="advance-id">1</td>
                                <td class="advance-name">22/03/2022</td>
                                <td class="advance-money">220000</td>
                                <td class="advance-trash">
                                    <BsFillTrashFill></BsFillTrashFill>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <ul class="pagination pagination-sm">
                        <li class="page-item">
                            <a class="page-link" >
                                Previous</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" >1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link">Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Advance