import { BsPlusCircleFill, BsPersonLinesFill } from 'react-icons/bs';
import './team-list.css'

function TeamList() {
    return (
        <div>
            <div class="content-header">
                <div class="tab-name">
                    <b>Team</b>
                </div>
                <div class="icon">
                    <BsPlusCircleFill></BsPlusCircleFill>
                </div>
            </div>
            <div class="content-team-list">
                <div class="total-team-box">
                    <p class="total-team-text">Total 1 Teams</p>
                </div>
                <div class="space"></div>
            </div>
            <div class="table-content">
                <table class="table-team-list table table-striped">
                    <thead class="thead">
                        <tr class="thead-row">
                            <th scope="col">
                                <b>No</b>
                            </th>
                            <th scope="col">
                                <b>Name</b>
                            </th>
                            <th scope="col">
                                <b>Detail</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="tbody">
                        <tr class="tbody-row">
                            <td class="team-id">1</td>
                            <td class="team-name">Team này của Tiến</td>
                            <td class="team-detail">
                                <BsPersonLinesFill></BsPersonLinesFill>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table class="table-team-member table table-striped" >
                    <thead class="thead">
                        <tr class="thead-row">
                            <th scope="col">
                                <b>No</b>
                            </th>
                            <th scope="col">
                                <b>Full Name</b>
                            </th>
                            <th scope="col">
                                <b>Phone</b>
                            </th>
                            <th scope="col">
                                <b>Address</b>
                            </th>
                            <th scope="col">
                                <b>Sex</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="tbody">
                        <tr class="tbody-row" >
                            <td class="team-id">1</td>
                            <td class="team-name">team này của Tiến</td>
                            <td class="team-phone">03333</td>
                            <td class="team-address">...</td>
                            <td class="team-sex">haha</td>
                        </tr>
                    </tbody >
                </table >
            </div >
        </div >
    );
}

export default TeamList