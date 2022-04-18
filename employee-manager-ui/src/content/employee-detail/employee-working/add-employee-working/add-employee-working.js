import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { BsPlusCircleFill } from "react-icons/bs";

import ConvertDateToDisplayDate from "./../../../../util/GeneralFunction/Converter"
function AddEmployeeWorking() {
    const [date, setDate] = useState((today = new Date()) => ConvertDateToDisplayDate(today));
    const [isDatePassed, setDatePassed] = useState(false);
    const [hour,setHour] = useState(0)
    const [isHourPassed, setHourPassed] = useState(false);

    function validateDateEmployeeWorkingDate(inputDate) {
        let today = new Date();
        let input = new Date(inputDate)
        if (input > today) {
            alert("Working date has to less than to day")
            return;
        }
        setDatePassed(true)
        setDate(ConvertDateToDisplayDate(input))
    }

    function validateHourEmployeeWorkingDate(hour) {
        if (hour.trim()=== "") {
            alert("Working hour can not be empty")
        }

        if (isNaN(hour)) {
            alert("Working hour have to be a number")
            return
        }

        if (hour > 24 || hour < 0) {
            alert("Working hour have to greater than 0 and less than 24")
            return;
        }
        setHour(hour);
        setHourPassed(hour);
    }

    function AddEmployeeWorking() {

    }

    return (
        <Popup
            position="middle center"
            modal
            nested
            trigger={
                <button>
                    <BsPlusCircleFill></BsPlusCircleFill>
                </button>
            }
        >
            {(close) => (
                <div className="team-add-modal">
                    <div className="modal-header">
                        <h4 className="modal-title">
                            Add new employee working date
                        </h4>
                    </div>
                    <div className="modal-body">
                        <div className="form-group row">
                            <div className="form-group-start col-xs-1">
                                <p className="title"> Date * </p>
                                <input
                                    type="date"
                                    placeholder="yyyy-MM-dd"
                                    className="form-control"
                                    value={date}
                                    onChange={(input) => {
                                        validateDateEmployeeWorkingDate(
                                            input.target.value
                                        );
                                    }}
                                ></input>
                            </div>
                            <div className="form-group-age col-xs-1">
                                <p className="title"> Hour * </p>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter hour"
                                    value={hour===0? "" : hour}
                                    onChange={(input) => {
                                        validateHourEmployeeWorkingDate(input.target.value);
                                    }}
                                ></input>
                            </div>
                            {/* <p className="validator"> {ageMessageError} </p> */}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                // addTeam();
                            }}
                        >
                            SUBMIT
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-dark"
                            onClick={() => close()}
                        >
                            CANCEL
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default AddEmployeeWorking;
