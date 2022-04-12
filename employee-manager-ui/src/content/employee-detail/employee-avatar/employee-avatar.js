import React, { useState, useEffect } from "react";
import "./employee-avatar.css";

import SexPipe from "./../../../util/GeneralFunction/sex-pipe";
import { RetrieveEmployee } from "../../../util/GeneralFunction/EmployeeAxios";
import Loading from "../../../util/loading/loading";
import defaultImage from "./../../../assets/default.jpg";

function EmployeeAvatar(props) {
    const [avatar, setAvatar] = useState(defaultImage);
    let employee = props.employee;


    useEffect(() => {
        if (employee.avatar === "") {
            setAvatar(defaultImage);
        }
        if (employee.avatar !== avatar) {
            setAvatar("http://localhost:8080/images/"+employee.avatar);
        }
    });
    if (employee === undefined) {
        return <Loading></Loading>;
    }

    return (
        <div className="avatar">
            <div className="avatar-image-box">
                <img
                    className="avatar-image"
                    src={avatar}
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
                <div className="id badge bg-primary text-wrap ">
                    No: {employee.id}
                </div>
                <div className="age badge bg-success text-wrap ">
                    Age: {employee.age}
                </div>
                <br></br>
                <div className="badge bg-warning text-wrap ">
                    Sex: {SexPipe(employee.sex)}
                </div>
            </div>
        </div>
    );
}

export default EmployeeAvatar;
