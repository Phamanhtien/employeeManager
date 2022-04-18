import axios from "axios";

export default function GetNumberOfAllWorkingAdvancesOfAnEmployee(employeeId) {
    return axios
        .get("http://localhost:8080/employeeWorking/advance/all/" + employeeId)
        .then((res) => res.data)
        .catch((err) => console.error(err));
}

function RetrieveAllWorkingAdvancesOfAnEmployeeWithPaging(employeeId, pageNumber) {
    return axios
        .get(
            "http://localhost:8080/employeeWorking/advance/all/" +
                employeeId +
                "/" +
                pageNumber
        )
        .then((res) => res.data)
        .catch((err) => console.error(err));
}

function AddWorkingAdvanceOfAnEmployee(employeeWorkingAdvance) {
    return axios
        .post(
            "http://localhost:8080/employeeWorking/advance/add",
            employeeWorkingAdvance
        )
        .then((res) => res)
        .catch((err) => console.error(err));
}

export {
    RetrieveAllWorkingAdvancesOfAnEmployeeWithPaging,
    AddWorkingAdvanceOfAnEmployee,
};