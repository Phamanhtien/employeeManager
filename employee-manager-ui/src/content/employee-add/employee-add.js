import React from 'react';
import './employee-add.css'
import { Dropdown, DropdownButton } from 'react-bootstrap';

class EmployeeAdd extends React.Component {
    render() {
        return (
            <div class="my-modal">
                <div class="modal-header">
                    <h4 class="modal-title">Add new Employee</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group form-group-name">
                        <p class="title">Full name employee</p>
                        <input type="text" class="form-control" placeholder="Enter name"></input>
                        <div class="row">
                            <p class="validator col">err</p>
                            <p class="name-length-per-max col">/225</p>
                        </div>
                    </div>
                    <div class="form-group form-group-team">
                        <p class="title">Team *</p>
                        <div ngbDropdown class="drop-down">
                            <DropdownButton id="dropdown-basic-button" title="Team name">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                    <p class="name-length-per-max"> </p>
                    <div class="form-group row">
                        <div class="form-group-address col-xs-1">
                            <p class="title">Address *</p>
                            <input type="text" class="form-control" placeholder="Enter address"></input>
                        </div>
                        <div class="form-group-sex col-xs-1">
                        <p class="title">Sex *</p>
                            <DropdownButton id="dropdown-basic-button" title="Sex">
                                <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <p class="name-length-per-max"> </p>
                    </div>

                    <div class="form-group row">
                        <div class="form-group-age col-xs-1">
                            <p class="title">Age *</p>
                            <input type="text" class="form-control" placeholder="Enter age" ></input>
                        </div>
                        <div class="form-group-start col-xs-1">
                            <p class="title">Start day *</p>
                            <input type="date" placeholder="dd-mm-yyyy" class="form-control" value="01/17/2021"></input>
                        </div>
                        <p class="validator">err</p>
                    </div>

                    <div class="form-group row">
                        <div class="form-group-money-per-hour col-xs-1">
                            <p class="title">Money/hour *</p>
                            <input type="text" class="form-control" placeholder="Enter money/hour" ></input>
                            <p class="validator">err</p>
                        </div>

                        <div class="form-group-phone-number col-xs-1">
                            <p class="title">Phone number *</p>
                            <input type="text" class="form-control" placeholder="Enter phone number"></input>
                            <p class="validator">errr </p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">SUBMIT</button>
                    <button type="button" class="btn btn-outline-dark">CANCEL</button>
                </div >
            </div >
        )
    }
}


export default EmployeeAdd