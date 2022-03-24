export class EmployeeApiList {
    public static getNumberOfAllEmployee:string = "http://localhost:8080/employee/all"
    public static retrieveAllEmployeeWithPaging: string = "http://localhost:8080/employee/all/"
    public static retrieveEmployeeByNameWithPaging:string = "http://localhost:8080/employee/search/"
    public static addEmployee:string = "http://localhost:8080/employee/add"
    public static deleteEmployee:string = "http://localhost:8080/employee/delete"
    public static retrieveEmployee:string = "http://localhost:8080/employee/"
    public static updateEmployee:string = "http://localhost:8080/employee/update"
    public static uploadImage:string = "http://localhost:8080/employee/upImage"
}