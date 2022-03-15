import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteEmployeeService } from '../../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss'],
})
export class DeleteEmployeeComponent implements OnInit {

  deleteEmployees: number[] = [];
  constructor(
    public activeModal: NgbActiveModal,
    private deleteEmployeeService: DeleteEmployeeService) { }

  ngOnInit(): void {
  }

  deleteAnEmployee() {
    this.deleteEmployeeService.setData(this.deleteEmployees);
    this.deleteEmployeeService.deleteEmployee().subscribe((res: any) => {
      console.warn();
      alert("Success");
      window.location.reload();
    },
      (err: any) => {
        alert("The employees that you want to delete may be include manager. Please change manager and delete again");
      }
    );
  }
}
