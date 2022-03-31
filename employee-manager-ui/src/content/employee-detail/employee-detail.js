import React from 'react';

import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs';
import EmployeeAvatar from './employee-avatar/employee-avatar';
import EmployeeWorking from './employee-working/employee-working';
import './employee-detail.css'

function EmployeeDetail() {
    return (
        <div>
            <div className="content-header">
                <div className="tab-name">
                    <b>Phạm Anh Tiến</b>
                </div>
                <div className="icon">
                    <BsPencilSquare></BsPencilSquare>
                    <BsFillTrashFill></BsFillTrashFill>
                </div>
            </div>
            <div className="employee-detail">
                <EmployeeAvatar className="employee-avatar"></EmployeeAvatar>
                <div className='employee-working'>
                    <EmployeeWorking className></EmployeeWorking>
                </div>
            </div>
        </div>
    )
}



export default EmployeeDetail