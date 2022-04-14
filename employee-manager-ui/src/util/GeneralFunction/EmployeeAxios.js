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

function GetNumberOfEmployeeByNameWithoutPaging(searchName) {
    return axios.get('http://localhost:8080/employee/search/'+searchName+"/count")
    .then(res => res.data)
    .catch(error => {console.log(error)});
}

function RetrieveEmployeeByNameWithPaging(searchName,pageNumber) {
    return axios.get('http://localhost:8080/employee/search/'+searchName+"/"+pageNumber)
    .then(res => res.data)
    .catch(error => {console.log(error)});
}

function DeleteEmployee(employeeIdList) {
    return axios.delete('http://localhost:8080/employee/delete', {data:employeeIdList})
    .then(res => res)
    .catch(error => error);
}

function AddEmployee(employee) {
    return axios.post('http://localhost:8080/employee/add', employee)
    .then(res => res)
    .catch(error => error);
}

function RetrieveEmployeeByNameWithoutPaging(searchName) {
    return axios.get('http://localhost:8080/employee/search/'+searchName)
    .then(res => res.data)
    .catch(error => {console.log(error)});
}

function RetrieveEmployee(employeeId) {
    return axios.get('http://localhost:8080/employee/'+employeeId)
    .then(res => res.data)
    .catch(error => {console.log(error)});
}

function UpdateEmployee(employee) {
    return axios.post('http://localhost:8080/employee/update',employee)
    .then(res => res.data)
    .catch(error => {console.log(error)});
}

export {RetrieveAllEmployeeWithPaging, 
        GetNumberOfEmployeeByNameWithoutPaging,
        RetrieveEmployeeByNameWithPaging,
        RetrieveEmployeeByNameWithoutPaging,
        DeleteEmployee,
        AddEmployee,
        RetrieveEmployee,
        UpdateEmployee}