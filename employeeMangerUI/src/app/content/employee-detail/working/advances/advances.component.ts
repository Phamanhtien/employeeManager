import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { WorkingAdvance } from '../../../../../model/workingAdvance.model';
import { Employee } from '../../../../../model/employee.model';
import { AddWorkingAdvanceComponent } from '../../../add-working-advance/add-working-advance.component';
import { GetTotalWorkingAdvanceService,
         WorkingAdvanceListWithPagingService,
         DeleteWorkingAdvanceService, } from '../../../../../service/working-advance.service';

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
    private getTotalWorkingAdvanceService: GetTotalWorkingAdvanceService,
    private workingAdvanceListWithPagingService: WorkingAdvanceListWithPagingService,
    private deleteWorkingAdvanceService: DeleteWorkingAdvanceService,
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
    this.getTotalWorkingAdvanceService.setEmployeeId(this.employee.id);
    this.getTotalWorkingAdvanceService.getAllEmployeesWithoutPaging().subscribe((res: any) => {
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
    this.workingAdvanceListWithPagingService.setEmployeeId(this.employee.id);
    this.workingAdvanceListWithPagingService.setPageNumber(this.pageNumber)
    this.workingAdvanceListWithPagingService.getAllWorkingAdvanceOfAnEmployeesWithPaging().subscribe((res: any) => {
      this.workingAdvanceList = res;
    })
  }

  deleteAnWorkingAdvance(workingAdvance: WorkingAdvance) {
    this.deleteWorkingAdvanceService.setWorkingDate(workingAdvance);
    this.deleteWorkingAdvanceService.deleteWorkingAdvance().subscribe((res: any) => {
      console.warn();
      alert("Success");
    })
  }
}
