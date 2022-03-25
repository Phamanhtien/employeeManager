import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { WorkingAdvance } from '../../../../../model/workingAdvance.model';
import { Employee } from '../../../../../model/employee.model';
import { AddWorkingAdvanceComponent } from '../../../add-working-advance/add-working-advance.component';
import { GetNumberOfAllWorkingAdvancesOfAnEmployee,
         RetrieveAllWorkingAdvancesOfAnEmployee,
         DeleteWorkingAdvanceOfAnEmployeeService, } from '../../../../../service/working-advance.service';

@Component({
  selector: 'app-advances',
  templateUrl: './advances.component.html',
  styleUrls: ['./advances.component.scss']
})
export class AdvancesComponent implements OnInit {
  numberOfWorkingAdvance: number = 0;
  workingAdvanceList: WorkingAdvance[] = [];
  pageNumber = 0;
  numberOfPages = 0;
  pageArray: number[] = [];

  @Input() employee: Employee;

  constructor(
    private modalService: NgbModal,
    private getNumberOfAllWorkingAdvancesOfAnEmployee: GetNumberOfAllWorkingAdvancesOfAnEmployee,
    private retrieveAllWorkingAdvancesOfAnEmployee: RetrieveAllWorkingAdvancesOfAnEmployee,
    private deleteWorkingAdvanceOfAnEmployeeService: DeleteWorkingAdvanceOfAnEmployeeService,
  ) { }

  ngOnInit(): void {
    this.getNumberOfWorkingDate()
    this.getAllWorkingAdvanceOfAnEmployeesWithPaging();
  }

  openAddWorkingAdvanceOfAnEmployee() {
    const modalRef = this.modalService.open(AddWorkingAdvanceComponent);
    modalRef.componentInstance.name = 'addWorkingAdvanceComponent';
    modalRef.componentInstance.employeeId = this.employee.id;
  }

  getNumberOfWorkingDate() {
    this.getNumberOfAllWorkingAdvancesOfAnEmployee.setEmployeeId(this.employee.id);
    this.getNumberOfAllWorkingAdvancesOfAnEmployee.getNumberOfAllWorkingAdvancesOfAnEmployee().subscribe((res: any) => {
      this.numberOfWorkingAdvance = res;
      console.log(res);
      this.numberOfPages = ~~(this.numberOfWorkingAdvance / 5)
      if (this.numberOfWorkingAdvance % 5 == 0) {
        this.numberOfPages -= 1;
      }
      for (let i = 1; i < this.numberOfPages; i++) {
        this.pageArray.push(i);
      }
    })
  }


  getAllWorkingAdvanceOfAnEmployeesWithPaging() {
    this.retrieveAllWorkingAdvancesOfAnEmployee.setEmployeeId(this.employee.id);
    this.retrieveAllWorkingAdvancesOfAnEmployee.setPageNumber(this.pageNumber)
    this.retrieveAllWorkingAdvancesOfAnEmployee.retrieveAllWorkingAdvancesOfAnEmployee().subscribe((res: any) => {
      this.workingAdvanceList = res;
    })
  }

  deleteAnWorkingAdvance(workingAdvance: WorkingAdvance) {
    this.deleteWorkingAdvanceOfAnEmployeeService.setWorkingDate(workingAdvance);
    this.deleteWorkingAdvanceOfAnEmployeeService.deleteWorkingAdvanceOfAnEmployee().subscribe((res: any) => {
      console.warn();
      alert("Success");
    })
  }
}
