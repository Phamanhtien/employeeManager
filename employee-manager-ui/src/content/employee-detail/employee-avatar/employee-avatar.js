import React, { useState, useEffect } from "react";
import "./employee-avatar.css";

import SexPipe from "./../../../util/GeneralFunction/sex-pipe"
import { RetrieveEmployee } from "../../../util/GeneralFunction/EmployeeAxios";
import Loading from "../../../util/loading/loading";

// import {image} from "C:/Users/tienm/OneDrive/Máy tính/employeeManager/image/1.jpg"
// import "./../../../../../image/"
function EmployeeAvatar(props) {
    // const photo = require("./../../../../../image/1.jpg");
    let employee = props.employee
    if (employee === undefined) {
        return (
            <Loading></Loading>
        )
    }
    return (
        <div className="avatar">
            <div className="avatar-image-box">
                <img
                    className="avatar-image"
                    src= "./../../../../../image/1.jpg"
                ></img>
                <div className="upload-image">
                    <input
                        className="uploadImageInput"
                        type="file"
                        id="selectedFile"
                    />
                    <input
                        className="btn btn-primary input-choose"
                        type="button"
                        value="Choose"
                        onClick={() =>
                            document.getElementById("selectedFile").click()
                        }
                    />
                    <button className="btn btn-primary button-submit" value="">
                        Submit
                    </button>
                </div>
            </div>
            <div className=" badges ">
                <div className="id badge bg-primary text-wrap ">No: {employee.id}</div>
                <div className="age badge bg-success text-wrap ">Age: {employee.age}</div>
                <br></br>
                <div className="badge bg-warning text-wrap ">Sex: {SexPipe(employee.sex)}</div>
            </div>
        </div>
    );
}

export default EmployeeAvatar;
