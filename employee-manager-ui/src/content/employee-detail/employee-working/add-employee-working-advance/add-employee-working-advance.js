import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { useSnapshot } from "valtio";
import { useMutation } from "react-query";

import { EmployeeState } from "../../../../global-states/employee-state";
import ConvertDateToDisplayDate from "../../../../util/GeneralFunction/Converter"
import { AddWorkingAdvanceOfAnEmployee } from "../../../../util/GeneralFunction/WorkingAdvanceAxios"
import EmployeeWorkingAdvance from "./../../../../model/employeeWorkingAdvance"


function AddEmployeeWorkingAdvance(props) {

    const employeeStateSnap = useSnapshot(EmployeeState);
    const [date, setDate] = useState((today = new Date()) => ConvertDateToDisplayDate(today));
    const addWorkingAdvanceOfAnEmployee = useMutation("AddWorkingAdvanceOfAnEmployee",(employeeWorkingAdvance) => AddWorkingAdvanceOfAnEmployee(employeeWorkingAdvance))
    const [isDatePassed, setDatePassed] = useState(false);
    const [money,setMoney] = useState(0)
    const [isMoneyPassed, setMoneyPassed] = useState(false);

    function validateDateEmployeeWorkingAdvance(inputDate) {
        let today = new Date();
        let input = new Date(inputDate)
        if (input > today) {
            alert("Advance date has to less than to day")
            return;
        }
        setDatePassed(true)
        setDate(ConvertDateToDisplayDate(input))
    }

    function validateHourEmployeeWorkingDate(money) {
        if (money.trim()=== "") {
            alert("Advance money can not be empty")
        }

        if (isNaN(money)) {
            alert("Advance money have to be a number")
            return
        }

        if (money < 0) {
            alert("Advance money have to greater than 0")
            return;
        }
        setMoney(money);
        setMoneyPassed(true);
    }

    function AddEmployeeWorkingAdvance() {
        if (!isDatePassed) {
            alert("Check the employee working")
            return;
        }

        if (!isMoneyPassed) {
            alert("Check the working hour")
            return;
        }

        let employeeWorkingAdvance = new EmployeeWorkingAdvance()
        employeeWorkingAdvance.employeeId = employeeStateSnap.employee.id
        employeeWorkingAdvance.date = date
        employeeWorkingAdvance.money = money
        // addWorkingAdvanceOfAnEmployee.mutate(employeeWorkingAdvance)
        // if (addWorkingAdvanceOfAnEmployee.isError) {
        //     alert("Add new employee working date fail")
        // }

        // if (addWorkingAdvanceOfAnEmployee.isSuccess) {
        //     props.addCallBack()
        // }
        console.log("call")
        props.addCallBack()
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
                                        validateDateEmployeeWorkingAdvance(
                                            input.target.value
                                        );
                                    }}
                                ></input>
                            </div>
                            <div className="form-group-age col-xs-1">
                                <p className="title"> Money * </p>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter money"
                                    value={money===0? "" : money}
                                    onChange={(input) => {
                                        validateHourEmployeeWorkingDate(input.target.value);
                                    }}
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                AddEmployeeWorkingAdvance()
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

export default AddEmployeeWorkingAdvance;
