import React from 'react';
import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs';

import './employee-working.css'
import Info from './info/info';
import Working from './working/working';
import Advance from './advance/advance';
import Statistics from './statistics/statistics'

class EmployeeWorking extends React.Component {
    render() {
        return (
            <div>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <p class="nav-link">INFORMATIONS</p>
                    </li>
                    <li class="nav-item">
                        <p class="nav-link">WORKING</p>
                    </li>
                    <li class="nav-item">
                        <p class="nav-link">ADVANCE</p>
                    </li>
                    <li class="nav-item">
                        <p class="nav-link">STATISTICS</p>
                    </li>
                </ul>
                <div>
                    <Info></Info>
                </div>

                <div>
                    <Working></Working>
                </div >
                <br></br><br></br>

                <div >
                   <Advance></Advance>
                </div >

                <div >
                   <Statistics></Statistics>
                </div >
            </div >
        )
    }
}

export default EmployeeWorking