import { Component, ViewChild, OnInit } from '@angular/core';
import {
  GetAnEmployeeService,
  DeleteEmployeeService,
  UpdateEmployeeService
} from '../../employee.service'
import { Employee } from '../../../model/employee.model'
import { Router } from '@angular/router';

import { WorkingComponent } from './working/working.component';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employeeId = window.location.href.split("/")[4];
  employee: Employee = new Employee();
  @ViewChild(WorkingComponent) workingComponent;

  constructor(
    private router: Router,
    private getAnEmployeeService: GetAnEmployeeService,
    private deleteEmployeeService: DeleteEmployeeService,
    private updateEmployeeService: UpdateEmployeeService
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

  saveEmployee() {
    var employee: Employee = new Employee();
    employee = this.workingComponent.editEmployeeData;
    this.updateEmployeeService.setEmployee(employee);
    this.updateEmployeeService.saveEmployee().subscribe((res: any) => {
      console.warn();
      alert("Success")
    }), (err: any) => {
      alert(err.message)
    };
    window.location.reload();
  }
}
