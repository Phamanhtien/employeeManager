import axios from "axios";

export default function GetImageWithMediaType(imageName) {
    return axios
        .get("http://localhost:8080/images/")
        .then((res) => res.data)
        .catch((error) => console.error(error));
}

function UpdateAvatarImage(updateImagePackage) {
    let bodyFormData = new FormData();
    bodyFormData.append("file", updateImagePackage.file);
    bodyFormData.append("employeeId", updateImagePackage.employeeId)
    return axios.post("http://localhost:8080/employee/upImage",bodyFormData
    )
    .then(res=> res)
    .catch(error=>console.error(error))
}

export {
    UpdateAvatarImage
}