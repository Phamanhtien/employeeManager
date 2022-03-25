import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { WorkingDate } from '../../../../../model/workingDate.model'
import { Employee } from '../../../../../model/employee.model'
import { AddWorkingDateComponent } from '../../../add-working-date/add-working-date.component'
import { GetNumberOfAllWorkingDateOfAnEmployeeService, 
         RetrieveAllWorkingDateOfAnEmployeeWithPagingService,
         DeleteWorkingDateService } from '../../../../../service/working-date.service'

@Component({
  selector: 'app-working-date',
  templateUrl: './working-date.component.html',
  styleUrls: ['./working-date.component.scss']
})
export class WorkingDateComponent implements OnInit {

  numberOfWorkingDate: number = 0;
  pageNumber = 0;
  numberOfPages = 0;
  pageArray: number[] = [];
  @Input() employee: Employee;
  workingDateList:WorkingDate[] = []

  constructor(
    private modalService: NgbModal,
    private getNumberOfAllWorkingDateOfAnEmployeeService: GetNumberOfAllWorkingDateOfAnEmployeeService,
    private retrieveAllWorkingDateOfAnEmployeeWithPagingService: RetrieveAllWorkingDateOfAnEmployeeWithPagingService,
    private deleteWorkingDateService: DeleteWorkingDateService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getNumberOfWorkingDate();
    this.getAllWorkingDateOfAnEmployeesWithPaging();
  }

  openAddWorkingDateOfAnEmployee() {
    const modalRef = this.modalService.open(AddWorkingDateComponent);
    modalRef.componentInstance.name = 'addWorkingDateComponent';
    modalRef.componentInstance.employeeId = this.employee.id;
  }

  getNumberOfWorkingDate() {
    this.getNumberOfAllWorkingDateOfAnEmployeeService.setEmployeeId(this.employee.id);
    this.getNumberOfAllWorkingDateOfAnEmployeeService.getNumberOfAllWorkingDateOfAnEmployee().subscribe((res: any) => {
      this.numberOfWorkingDate = res;
      console.log(res);
      this.numberOfPages = ~~(this.numberOfWorkingDate / 5)
      if (this.numberOfWorkingDate % 5 == 0) {
        this.numberOfPages -= 1;
      }
      for (let i = 1; i < this.numberOfPages; i++) {
        this.pageArray.push(i);
      }
    })
  }

  getAllWorkingDateOfAnEmployeesWithPaging() {
    this.retrieveAllWorkingDateOfAnEmployeeWithPagingService.setEmployeeId(this.employee.id);
    this.retrieveAllWorkingDateOfAnEmployeeWithPagingService.setPageNumber(this.pageNumber)
    this.retrieveAllWorkingDateOfAnEmployeeWithPagingService.getAllWorkingDateOfAnEmployeesWithPaging().subscribe((res: any) => {
      this.workingDateList = res;
    })
  }

  deleteAnWorkingDate(workingDate: WorkingDate) {
    this.deleteWorkingDateService.setWorkingDate(workingDate);
    this.deleteWorkingDateService.deleteWorkingDate().subscribe((res: any) => {
      console.warn();
      alert("Success");
    })
  }
}
