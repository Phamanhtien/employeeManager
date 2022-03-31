import axios from 'axios';

export default function GetNumberOfAllEmployee() {
    return axios.get('http://localhost:8080/employee/all')
        .then(res => res.data)
        .catch(error => console.error(error));
}

function RetrieveAllEmployeeWithPaging(pageNumber) {
    return axios.get('http://localhost:8080/employee/all/'+ pageNumber)
        .then(res => res.data)
        .catch(error => console.log(error));
}

function RetrieveEmployeeByNameWithoutPaging(searchName) {
    return axios.get('http://localhost:8080/employee/search/'+searchName)
    .then(res => res.data)
    .catch(error => {console.log(error)});
}

function RetrieveEmployeeByNameWithPaging(searchName,pageNumber) {
    return axios.get('http://localhost:8080/employee/search/'+searchName+"/"+pageNumber)
    .then(res => res.data)
    .catch(error => {console.log(error)});
}

function deleteEmployee(employeeIdList) {
    return axios.delete('http://localhost:8080/employee/delete', {data:employeeIdList})
    .then(res => res.data)
    .catch(error => {console.log(error)});
}

export {RetrieveAllEmployeeWithPaging, 
        RetrieveEmployeeByNameWithoutPaging,
        RetrieveEmployeeByNameWithPaging,
        deleteEmployee}