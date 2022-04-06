import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { BsFillTrashFill } from "react-icons/bs";

import "./employee-delete-list.css";
import { DeleteEmployee } from "../../util/GeneralFunction/EmployeeAxios";

function EmployeeDeleteList(props) {
    function callBack(pageNumber) {
        props.employeeDeleteListCallBack();
    }

    return (
        <Popup
            position="middle center"
            modal
            nested
            trigger={
                <button>
                    <BsFillTrashFill></BsFillTrashFill>
                </button>
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
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => close()}
                        >
                            NO
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={async () => {
                                close();
                                await DeleteEmployee(
                                    props.listDeleteEmployeeId
                                ).then((res) => {
                                    if (res.response !== undefined) {
                                        alert(res.response.data.message);
                                    }

                                    if (res.response === undefined) {
                                        alert(
                                            "Employee was deleted successfully"
                                        );
                                    }
                                });
                                callBack();
                            }}
                        >
                            YES
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default EmployeeDeleteList;
