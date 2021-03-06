import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkingDate } from '../../../model/workingDate.model';
import { AddWorkingDateOfAnEmployeeService } from '../../../service/working-date.service';

@Component({
  selector: 'app-add-working-date',
  templateUrl: './add-working-date.component.html',
  styleUrls: ['./add-working-date.component.scss']
})
export class AddWorkingDateComponent implements OnInit {

  workingDate: WorkingDate = new WorkingDate();
  hourMessageError: string = "";
  isHourPassed = false;
  employeeId:number;

  constructor(
    public activeModal: NgbActiveModal,
    private addWorkingDateOfAnEmployeeService: AddWorkingDateOfAnEmployeeService
  ) { }

  ngOnInit(): void {
    this.workingDate.setEmployeeId(this.employeeId);
  }

  public setEmployeeWorkingDateDate(date: Date) {
    this.workingDate.setDate(date);
  }

  public setEmployeeWorkingDateHour(hour: number) {
    if (hour <= 0 || hour > 24) {
      this.hourMessageError = "Working hour have to greater than 0 and less than 24";
      this.isHourPassed = false;
    }

    if (isNaN(Number(hour))) {
      this.hourMessageError = "Working hour have to be a number";
      this.isHourPassed = false;
    }

    if (hour > 0 && hour <= 24 && !isNaN(Number(hour))) {
      this.hourMessageError = "";
      this.isHourPassed = true;
      this.workingDate.setHour(hour)
    }
  }

  public saveEmployeeDate() {
    if (!this.isHourPassed) {
      if (this.hourMessageError == "") {
        alert(" Working hour is empty");
      }

      if (this.hourMessageError != "") {
        alert(this.hourMessageError);
      }
    }

    this.addWorkingDateOfAnEmployeeService.setWorkingDate(this.workingDate);
    this.addWorkingDateOfAnEmployeeService.addWorkingDateOfAnEmployee().subscribe((res: any) => {
      console.warn();
      alert("Success");
    })
  }
}
