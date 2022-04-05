import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {BsFillTrashFill } from "react-icons/bs";

import './employee-delete-list.css'
function EmployeeDeleteList() {
    return (
        <Popup
            position="middle center"
            modal
            trigger={
                <BsFillTrashFill
                ></BsFillTrashFill>
            }
        >
            {(close) => (
                <div className="employee-delete-list-modal">
                    <div className="modal-header">
                        <h5>Are you sure to delete all checked employees?</h5>
                    </div>
                    <div className="modal-body">
                        <p>It will delete all employees'data selected</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() =>close()}>
                            NO
                        </button>
                        <button type="button" className="btn btn-primary">
                            YES
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default EmployeeDeleteList;
