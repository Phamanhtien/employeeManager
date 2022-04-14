import axios from "axios";

export default function GetNumberOfAllWorkingDateOfAnEmployee(employeeId) {
    return axios
        .get("http://localhost:8080/employeeWorking/date/all/" + employeeId)
        .then((res) => res.data)
        .catch((err) => console.error(err));
}

function RetrieveAllWorkingDateOfAnEmployeeWithPaging(employeeId, pageNumber) {
    return axios
        .get(
            "http://localhost:8080/employeeWorking/date/all/" +
                employeeId +
                "/" +
                pageNumber
        )
        .then((res) => res.data)
        .catch((err) => console.error(err));
}

export { RetrieveAllWorkingDateOfAnEmployeeWithPaging }