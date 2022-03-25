import { Component, OnInit, Input } from '@angular/core';
import { StatisticsRequest } from '../../../../../model/statictisRequest.model'
import { StaticsReponse } from '../../../../../model/statictisResponse.model';
import { Employee } from '../../../../../model/employee.model'
import { GetStaticEmployeeWorkingService } from '../../../../../service/working-static.service';

@Component({
  selector: 'app-statics',
  templateUrl: './statics.component.html',
  styleUrls: ['./statics.component.scss']
})
export class StaticsComponent implements OnInit {

  statisticsRequest: StatisticsRequest = new StatisticsRequest();
  staticsReponse: StaticsReponse = new StaticsReponse();
  monthMessageError: string = "";
  isMonthPassed: boolean = false;
  yearMessageError: string = "";
  isYearPassed: boolean = false;
  wasQuery: boolean = false;

  @Input() employee: Employee;

  constructor(
    private getStaticEmployeeWorkingService: GetStaticEmployeeWorkingService,
  ) { }

  ngOnInit(): void {
    this.statisticsRequest.setEmployeeId(this.employee.id);
  }

  setEmployeeStaticMonth(month: number): void {

    if (month <= 0 || month > 12) {
      this.monthMessageError = "Month have to be between 0 and 12"
      this.isMonthPassed = false;
    }

    if (!Number.isInteger(month)) {
      this.monthMessageError = "Month must be a number";
      this.isMonthPassed = false;
    }

    if (month > 0 && month <= 12 && Number.isInteger(month)) {
      this.monthMessageError = "";
      this.isMonthPassed = true;
      this.statisticsRequest.setMonth(month);
    }
  }

  setEmployeeStaticYear(year: number): void {
    var today = new Date();
    var thisYear = today.getFullYear();
    if (year <= 1950 || year > thisYear) {
      this.yearMessageError = "Year have to be between 0 and this year"
      this.isYearPassed = false;
    }

    if (!Number.isInteger(year)) {
      this.yearMessageError = "Year must be a number";
      this.isYearPassed = false;
    }

    if (year > 1950 && year <= thisYear && Number.isInteger(year)) {
      this.yearMessageError = "";
      this.isYearPassed = true;
      this.statisticsRequest.setYear(year);
    }
  }

  getStatic() {
    if (this.isMonthPassed == false) {
      if (this.monthMessageError == "") {
        alert("Please enter a month");
      }

      if (this.monthMessageError != "") {
        alert(this.monthMessageError);
      }
    }

    if (this.isYearPassed == false) {
      if (this.yearMessageError == "") {
        alert("Please enter a year");
      }

      if (this.yearMessageError != "") {
        alert(this.yearMessageError);
      }
    }

    if (this.isMonthPassed == true && this.isYearPassed == true) {
      this.getStaticEmployeeWorkingService.setstatisticsRequest(this.statisticsRequest)
      this.getStaticEmployeeWorkingService.getStaticEmployeeWorking().subscribe((res: any) => {
        this.staticsReponse = res;
      })
      this.wasQuery = true;
    }
  }
}
