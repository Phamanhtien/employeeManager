import axios from "axios";

export default function GetStaticEmployeeWorking(statisticsRequest) {
    return axios
        .post("http://localhost:8080/employeeWorking/static", statisticsRequest)
        .then((res) => res.data)
        .catch((error) => console.error(error));
}
