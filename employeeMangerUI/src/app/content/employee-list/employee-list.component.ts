import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
import {
  EmployeeListWithoutPagingService,
  EmployeeListWithPagingService,
  EmployeeListWithPagingByNameService,
  DeleteEmployeeService
} from '../../employee.service'
import { Employee } from '../../../model/employee.model'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  pageNumber: number = 0;
  numberOfPages: number = 0;
  pageArray: number[] = []
  totalEmployee: number = -1;
  employeeList: Employee[] = [];
  searchByNameText: string = "";
  deleteEmployeeList: string =  "";

  constructor(
    private modalService: NgbModal,
    private employeeListWithoutPagingService: EmployeeListWithoutPagingService,
    private employeeListWithPagingService: EmployeeListWithPagingService,
    private employeeListWithPagingByNameService: EmployeeListWithPagingByNameService,
    private deleteEmployeeService: DeleteEmployeeService,
  ) { }

  ngOnInit(): void {
    this.getNumberOfEmployees();
    this.getAllEmployeesWithPaging();
  }

  openAddEmployee() {
    const modalRef = this.modalService.open(AddEmployeeComponent);
    modalRef.componentInstance.name = 'addEmployee';
  }

  openDeleteEmployee() {
    const modalRef = this.modalService.open(DeleteEmployeeComponent);
    modalRef.componentInstance.name = 'deleteEmployee';
  }

  getNumberOfEmployees() {
    this.employeeListWithoutPagingService.getNumberOfEmployees().subscribe((res: any) => {
      this.totalEmployee = res;
      this.numberOfPages = ~~(this.totalEmployee / 5)
      for (let i = 1; i < this.numberOfPages; i++) {
        this.pageArray.push(i);
      }
    })
  }

  getAllEmployeesWithPaging() {
    this.employeeListWithPagingService.setPageNumber(this.pageNumber);
    this.employeeListWithPagingService.getAllEmployeesWithPaging().subscribe((res: any) => {
      this.employeeList = res
    })
  }

  findEmployeesByName(searchByNameText: any) {
    if (searchByNameText.length == 0) {
      while (this.pageArray.length > 0) {
        this.pageArray.pop()
      }
      this.totalEmployee = this.employeeList.length;
      this.numberOfPages = ~~(this.totalEmployee / 5)
      for (let i = 1; i < this.numberOfPages; i++) {
        this.pageArray.push(i);
      }
      this.getNumberOfEmployees();
      this.getAllEmployeesWithPaging();
    }

    else {
      this.employeeListWithPagingByNameService.setPageNumber(this.pageNumber);
      this.employeeListWithPagingByNameService.setSearchByNameText(searchByNameText);
      this.employeeListWithPagingByNameService.getAllEmployeesWithPagingByName().subscribe((res: any) => {
        this.employeeList = res
        while (this.pageArray.length > 0) {
          this.pageArray.pop()
        }
        this.totalEmployee = this.employeeList.length;
        this.numberOfPages = ~~(this.totalEmployee / 5)
        for (let i = 1; i < this.numberOfPages; i++) {
          this.pageArray.push(i);
        }
      })
    }

  }

  deleteAnEmployee(id: any) {
      var temp: number[] = []
      temp.push(id);
      this.deleteEmployeeService.setData(temp);
      this.deleteEmployeeService.deleteEmployee().subscribe((res: any) => {
        console.warn();
        alert("Success");
        window.location.reload();
      },
      (err: any) => {
        alert("The employee that you want to delete may be a manager. Please change manager and delete again");
      }
    );
  }
}

