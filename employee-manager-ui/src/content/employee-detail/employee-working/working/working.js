import React from 'react';
import { BsFillPlusCircleFill, BsFillTrashFill } from 'react-icons/bs';

import './working.css'

class Working extends React.Component {
    render() {
        return (
            <div class="working-detail">
                <div class="head">
                    <h3>
                        WORKING
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
                                <b>Hour</b>
                            </th>
                            <th scope="col">
                                <b>Option</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="tbody">
                        <tr class="tbody-row">
                            <td class="team-id">1</td>
                            <td class="team-name">22/03/2022</td>
                            <td class="team-phone">3</td>
                            <td class="team-address">
                                <BsFillTrashFill></BsFillTrashFill>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <ul class="pagination pagination-sm">
                    <li class="page-item">
                        <a class="page-link">Previous</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" >1</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link">Next</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Working