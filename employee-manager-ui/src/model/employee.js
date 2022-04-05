export default class Employee {
    id = 0;
    avatar = "";
    fullName = "";
    phone = "";
    address = "";
    teamName = "";
    sex = false;
    age = 0;
    startDate = new Date();
    salaryPerHour = 0;
    isChecked = false;
    teamId = 0;

    constructor() {

    }

    EmployeeDTO(employee) {
        this.id = employee.id;
        this.avatar = employee.avatar;
        this.fullName = employee.fullName;
        this.phone = employee.phone;
        this.address = employee.address;
        this.teamName = employee.teamName;
        this.sex = employee.sex;
        this.age = employee.age;
        this.startDate = employee.startDate;
        this.salaryPerHour = employee.salaryPerHour;
        this.isChecked = employee.isChecked;
        this.teamId = employee.teamId;
    }
}