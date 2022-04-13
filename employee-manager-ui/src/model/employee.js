export default class Employee {
    id
    avatar = "";
    fullName = "";
    phone = "";
    address = "";
    sex = false;
    age = 0;
    startDate = new Date();
    salaryPerHour = 0;
    teamId = 0;

    constructor() {

    }

    EmployeeDTO(employee) {
        this.avatar = employee.avatar;
        this.fullName = employee.fullName;
        this.phone = employee.phone;
        this.address = employee.address;
        this.sex = employee.sex;
        this.age = employee.age;
        this.startDate = employee.startDate;
        this.salaryPerHour = employee.salaryPerHour;
        this.teamId = employee.teamId;
    }
}