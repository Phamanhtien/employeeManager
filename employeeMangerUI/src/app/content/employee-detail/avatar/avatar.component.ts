import { Component, OnInit } from '@angular/core';
import { GetAnEmployeeService } from '../../../employee.service'
import { Employee } from '../../../../model/employee.model'

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  employeeId = window.location.href.split("/")[4];
  employee: Employee = new Employee();
  constructor(
    private getAnEmployeeService: GetAnEmployeeService,
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
}
