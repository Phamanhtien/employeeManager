import React from 'react';
import ReactDOM from 'react-dom';

import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs';
import EmployeeAvatar from './employee-avatar/employee-avatar';
import EmployeeWorking from './employee-working/employee-working';
import './employee-detail.css'

// ReactDOM.render(
//     <React.StrictMode>
//     <EmployeeAvatar />
//     </React.StrictMode>,
//     document.getElementById('employee-avatar')
// );

function EmployeeDetail() {
    return (
        <div>
            <div className="content-header">
                <div class="tab-name">
                    <b>Phạm Anh Tiến</b>
                </div>
                <div class="icon">
                    <BsPencilSquare></BsPencilSquare>
                    <BsFillTrashFill></BsFillTrashFill>
                </div>
            </div>
            <div class="employee-detail">
                <EmployeeAvatar className="employee-avatar"></EmployeeAvatar>
                <div className='employee-working'>
                    <EmployeeWorking className></EmployeeWorking>
                </div>
            </div>
        </div>
    )
}



export default EmployeeDetail