import React from 'react';
import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs';

import './employee-working.css'
import Info from './info/info';

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
                    {/* <app-working-date [employee]="employee"></app-working-date> */}
                </div >

                <div  >
                    {/* <app-advances [employee] = "employee" ></app - advances > */}
                </div >

                <div >
                    {/* <app-statics [employee] = "employee" ></app - statics > */}
                </div >
            </div >
        )
    }
}

export default EmployeeWorking