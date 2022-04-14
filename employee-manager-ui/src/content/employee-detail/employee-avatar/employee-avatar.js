import React, { useState, useEffect } from "react";
import { useSnapshot } from 'valtio'
import "./employee-avatar.css";

import SexPipe from "./../../../util/GeneralFunction/sex-pipe";
import Loading from "../../../util/loading/loading";
import defaultImage from "./../../../assets/default.jpg";
import UpdateImagePackage from "../../../model/updateImagePackage";
import { UpdateAvatarImage } from "./../../../util/GeneralFunction/ImageAxios";
import { EmployeeState } from "../../../global-states/employee-state"

function EmployeeAvatar(props) {
    const employeeStateSnap = useSnapshot(EmployeeState)
    const [avatar, setAvatar] = useState(defaultImage);
    const [file, setFile] = useState();

    useEffect(() => {
        if (employeeStateSnap.employee.avatar !== "") {
            setAvatar("http://localhost:8080/images/" + employeeStateSnap.employee.avatar);
        }
    }, [avatar, file]);

    if (employeeStateSnap.employee.id === undefined) {
        return <Loading></Loading>;
    }

    function uploadImage(file, employeeId) {
        if (file === undefined) {
            return;
        }

        if (file.name === EmployeeState.employee.avatar) {
            return;
        }
        let updateImagePackage = new UpdateImagePackage();
        updateImagePackage.file = file;
        updateImagePackage.employeeId = employeeId;
        UpdateAvatarImage(updateImagePackage);
        setAvatar(EmployeeState.employee.avatar = file.name)

    }

    return (
        <div className="avatar">
            <div className="avatar-image-box">
                <img className="avatar-image" src={avatar}></img>
                <div className="upload-image">
                    <input
                        className="uploadImageInput"
                        type="file"
                        id="selectedFile"
                        onChange={(inputFile) => {
                            setFile(inputFile.target.files[0]);
                        }}
                    />
                    <input
                        className="btn btn-primary input-choose"
                        type="button"
                        value="Choose"
                        onClick={() =>
                            document.getElementById("selectedFile").click()
                        }
                    />
                    <button
                        className="btn btn-primary button-submit"
                        value=""
                        onClick={() => uploadImage(file, employeeStateSnap.employee.id)}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <div className=" badges ">
                <div className="id badge bg-primary text-wrap ">
                    No: {employeeStateSnap.employee.id}
                </div>
                <div className="age badge bg-success text-wrap ">
                    Age: {employeeStateSnap.employee.age}
                </div>
                <br></br>
                <div className="badge bg-warning text-wrap ">
                    Sex: {SexPipe(employeeStateSnap.employee.sex)}
                </div>
            </div>
        </div>
    );
}

export default EmployeeAvatar;
