import { Component, OnInit } from '@angular/core';
import { WorkingAdvance } from '../../../model/workingAdvance.model'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddWorkingAdvanceOfAnEmployeeService } from '../../../service/working-advance.service'

@Component({
  selector: 'app-add-working-advance',
  templateUrl: './add-working-advance.component.html',
  styleUrls: ['./add-working-advance.component.scss']
})
export class AddWorkingAdvanceComponent implements OnInit {

  workingAdvance: WorkingAdvance = new WorkingAdvance();
  moneyMessageError: string = "";
  isMoneyPassed = false;
  employeeId:number;

  constructor(
    public activeModal: NgbActiveModal,
    private addWorkingAdvanceOfAnEmployeeService: AddWorkingAdvanceOfAnEmployeeService,

  ) { }

  ngOnInit(): void {
    this.workingAdvance.setEmployeeId(this.employeeId);
  }

  public setEmployeeWorkingAdvanceDate(date: Date) {
    this.workingAdvance.setDate(date);
  }

  public setEmployeeWorkingAdvanceMoney(money: number) {
    if (money <= 0) {
      this.moneyMessageError = "Money have to greater than 0";
      this.isMoneyPassed = false;
    }

    if (isNaN(Number(money))) {
      this.moneyMessageError = "Money have to be a number";
      this.isMoneyPassed = false;
    }

    if (money > 0 && !isNaN(Number(money))) {
      this.moneyMessageError = "";
      this.isMoneyPassed = true;
      this.workingAdvance.setMoney(money);
    }
  }

  public saveEmployeeAdvance() {
    if (!this.isMoneyPassed) {
      if (this.moneyMessageError == "") {
        alert(" Advance money is empty");
      }

      if (this.moneyMessageError != "") {
        alert(this.moneyMessageError);
      }
    }

    if (this.isMoneyPassed) {
      this.addWorkingAdvanceOfAnEmployeeService.setWorkingAdvance(this.workingAdvance);
      this.addWorkingAdvanceOfAnEmployeeService.addWorkingAdvanceOfAnEmployee().subscribe((res: any) => {
        console.warn();
        alert("Success");
      })
    }
  }
}
