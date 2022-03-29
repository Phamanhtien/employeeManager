import React from 'react';
import './info.css'
import { Dropdown, DropdownButton, ButtonGroup, Button } from 'react-bootstrap';

class Info extends React.Component {
    render() {
        return (
            <div>
                <div class="infomation">
                    <h3 className='h3-infomations'>INFOMATIONS</h3>
                    <div class="row row-info">
                        <div class="col col-info form-group date-info">
                            <input type="date" placeholder="Start date" class="form-control" ></input>
                        </div>
                        <div class="col col-info form-group drop-down-info">
                                <DropdownButton id="dropdown-basic-button" title="Team name">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                        </div>
                    </div>
                    <div class="row row-info">
                        <input type="text" class="col col-info" placeholder="Address" aria-describedby="basic-addon1"></input>
                        <input type="text" class="col col-info" placeholder="Number" aria-describedby="basic-addon1" ></input>
                    </div>
                </div >
            </div >
        )
    }
}

export default Info;