export class StatisticsRequest {

    employeeId: number = 0;
    month: number = 0;
    year: number = 0;

    setEmployeeId(employeeId: number): void {
        this.employeeId = employeeId;
    }

    getEmployeeId(): number { return this.employeeId; }

    setMonth(month: number): void {
        this.month = month;
    }

    getMonth(): number { return this.month; }

    setYear(year: number): void {
        this.year = year;
    }
}