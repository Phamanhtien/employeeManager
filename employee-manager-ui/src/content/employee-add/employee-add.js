import React from 'react';
import './employee-add.css'
import { Dropdown, DropdownButton } from 'react-bootstrap';

class EmployeeAdd extends React.Component {
    render() {
        return (
            <div className="my-modal">
                <div className="modal-header">
                    <h4 className="modal-title">Add new Employee</h4>
                </div>
                <div className="modal-body">
                    <div className="form-group form-group-name">
                        <p className="title">Full name employee</p>
                        <input type="text" className="form-control" placeholder="Enter name"></input>
                        <div className="row">
                            <p className="validator col">err</p>
                            <p className="name-length-per-max col">/225</p>
                        </div>
                    </div>
                    <div className="form-group form-group-team">
                        <p className="title">Team *</p>
                        <div ngbDropdown className="drop-down">
                            <DropdownButton id="dropdown-basic-button" title="Team name">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                    <p className="name-length-per-max"> </p>
                    <div className="form-group row">
                        <div className="form-group-address col-xs-1">
                            <p className="title">Address *</p>
                            <input type="text" className="form-control" placeholder="Enter address"></input>
                        </div>
                        <div className="form-group-sex col-xs-1">
                        <p className="title">Sex *</p>
                            <DropdownButton id="dropdown-basic-button" title="Sex">
                                <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <p className="name-length-per-max"> </p>
                    </div>

                    <div className="form-group row">
                        <div className="form-group-age col-xs-1">
                            <p className="title">Age *</p>
                            <input type="text" className="form-control" placeholder="Enter age" ></input>
                        </div>
                        <div className="form-group-start col-xs-1">
                            <p className="title">Start day *</p>
                            <input type="date" placeholder="dd-mm-yyyy" className="form-control" value="01/17/2021"></input>
                        </div>
                        <p className="validator">err</p>
                    </div>

                    <div className="form-group row">
                        <div className="form-group-money-per-hour col-xs-1">
                            <p className="title">Money/hour *</p>
                            <input type="text" className="form-control" placeholder="Enter money/hour" ></input>
                            <p className="validator">err</p>
                        </div>

                        <div className="form-group-phone-number col-xs-1">
                            <p className="title">Phone number *</p>
                            <input type="text" className="form-control" placeholder="Enter phone number"></input>
                            <p className="validator">errr </p>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">SUBMIT</button>
                    <button type="button" className="btn btn-outline-dark">CANCEL</button>
                </div >
            </div >
        )
    }
}


export default EmployeeAdd