export class Employee {
    id: number = 0;
    avatar: string = "";
    fullName: string = "";
    phone: string = "";
    address: string = "";
    teamId: number = 0;
    sex: boolean = false;
    age: number = 0;
    startDate: Date = new Date();
    salaryPerHour: number = 0;
    isChecked: boolean = false;

    public EmployeeDTO(employee: Employee) {
        this.id = employee.id;
        this.avatar = employee.avatar;
        this.fullName = employee.fullName;
        this.phone = employee.phone;
        this.address = employee.address;
        this.teamId = employee.teamId;
        this.sex = employee.sex;
        this.age = employee.age;
        this.startDate = employee.startDate;
        this.salaryPerHour = employee.salaryPerHour;
        this.isChecked = employee.isChecked;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getId(): number {
        return this.id
    }

    public setAvatar(avatar: string) {
        this.avatar = avatar;
    }

    public getAvatar(): string {
        return this.avatar;
    }

    public setFullName(fullName: string) {
        this.fullName = fullName;
    }

    public getFullName(): string {
        return this.fullName;
    }

    public setPhone(phone: string) {
        this.phone = phone;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setAddress(address: string) {
        this.address = address;
    }

    public getAddress(): string {
        return this.address
    }

    public setTeamId(teamId: number) {
        this.teamId = teamId;
    }

    public getTeamId(): number {
        return this.teamId;
    }

    public setSex(sex: boolean) {
        this.sex = sex;
    }

    public getSex(): boolean {
        return this.sex;
    }

    public setAge(age: number) {
        this.age = age;
    }

    public getAge(): number {
        return this.age;
    }

    public setStartDate(startDate: Date) {
        this.startDate = startDate;
    }

    public getStartDate(): Date {
        return this.startDate;
    }

    public setSalaryPerHour(salaryPerHour: number) {
        this.salaryPerHour = salaryPerHour;
    }

    public getSalaryPerHour(): number {
        return this.salaryPerHour;
    }

    public setIsChecked(isChecked: boolean) {
        this.isChecked = isChecked;
    }

    public getIsChecked(): boolean {
        return this.isChecked;
    }
}