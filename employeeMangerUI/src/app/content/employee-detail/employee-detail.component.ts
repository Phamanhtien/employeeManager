import { Component, OnInit } from '@angular/core';
import { GetAnEmployeeService,
         DeleteEmployeeService } from '../../employee.service'
import { Employee } from '../../../model/employee.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employeeId = window.location.href.split("/")[4];
  employee: Employee = new Employee();

  constructor(
    private router: Router,
    private getAnEmployeeService: GetAnEmployeeService,
    private deleteEmployeeService: DeleteEmployeeService,
  ) { }

  ngOnInit(): void {
    this.getAnEmployee();
  }

  getAnEmployee() {
    this.getAnEmployeeService.setId(Number(this.employeeId));
    this.getAnEmployeeService.getAnEmployee().subscribe((res: any) => {
      this.employee = res;
    })
  }

  deleteAnEmployee() {
    var temp: number[] = []
    temp.push(this.employee.id);
    this.deleteEmployeeService.setData(temp);
    this.deleteEmployeeService.deleteEmployee().subscribe((res: any) => {
      console.warn();
      alert("Success");
      this.router.navigate(['employee'])
    },
      (err: any) => {
        alert("The employee that you want to delete may be a manager. Please change manager and delete again");
      }
    );
  }
}
