import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../../../model/employee.model';
import { Team } from '../../../model/team.model';
import { TeamListService } from '../../../service/team.service';
import { AddEmployeeSerivece } from '../../../service/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  ageMessageError: string = "";
  isAgePassed = false;
  salaryPerHourMessageError: string = "";
  isSalaryPerHourPassed = false;
  phoneMessageError: string = "";
  isPhonePassed = false;
  nameMessageError: string = "";
  isNamePassed = false;
  addressMessageError: string = "";
  isAddressPassed = false;
  nameLength = 0;

  sex = "Sex";
  team = "Team";
  teamList: Team[] = [];

  constructor(
    public activeModal: NgbActiveModal,
    private teamListService: TeamListService,
    private saveEmployeeService: AddEmployeeSerivece) { }

  ngOnInit(): void {
    this.getAllTeam();
  }

  setEmployeeFullName(employeeFullName: any) {
    if (employeeFullName == "") {
      this.nameMessageError = "Name can not be empty";
      this.nameLength = employeeFullName.length;
      this.isNamePassed = false
    } else {
      this.nameMessageError = ""
      this.nameLength = employeeFullName.length;
      this.isNamePassed = true;
      this.employee.setFullName(employeeFullName);
    }
  }

  setEmployeeAddress(employeeAddress: any) {
    if (employeeAddress == "") {
      this.isAddressPassed = false;
      this.addressMessageError = "Address can not be empty"
    } else {
      this.isAddressPassed = true;
      this.employee.setAddress(employeeAddress);
    }
  }

  setEmployeeSex(employeeSex: any) {
    if (employeeSex == true) {
      this.sex = "Male";
    }

    if (employeeSex == false) {
      this.sex = "Female";
    }
    this.employee.setSex(employeeSex);
  }

  setEmployeeAge(employeeAge: number) {
    if (isNaN(Number(employeeAge))) {
      this.ageMessageError = "Age has to be a number";
      this.isAgePassed = false;
    }
    else if (employeeAge < 18 || employeeAge > 60) {
      this.ageMessageError = "Age has to from 18 to 60";
      this.isAgePassed = false;
    } else {
      this.ageMessageError = "";
      this.isAgePassed = true;
      this.employee.setAge(employeeAge);
    }
  }

  setEmployeeStartDate(employeeStartDate: Date) {
    this.employee.setStartDate(employeeStartDate);
  }

  setEmployeeSalaryPerHour(salaryPerHour: number) {
    if (isNaN(Number(salaryPerHour))) {
      this.salaryPerHourMessageError = "Salary per hour has to be a number";
      this.isSalaryPerHourPassed = false;
    }
    else {
      this.salaryPerHourMessageError = "";
      this.isSalaryPerHourPassed = true;
      this.employee.setSalaryPerHour(salaryPerHour);
    }
  }

  setEmployeePhone(employeePhone: string) {
    var Regex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,12}\b/m;
    if (!Regex.test(employeePhone)) {
      this.phoneMessageError = "Invalid phone number format";
      this.isPhonePassed = false;
    }
    else {
      this.phoneMessageError = "";
      this.isPhonePassed = true;
      this.employee.setPhone(employeePhone);
    }
  }

  setTeamId(teamId: any, teamName: any) {
    this.employee.setTeamId(teamId);
    this.team = teamName;
  }

  getAllTeam() {
    this.teamListService.getAllTeam().subscribe((res: any) => {
      this.teamList = res;
    })
  }

  saveEmployee() {

    if (!this.isNamePassed) {
      if (this.nameMessageError == "") {
        alert("Name can not be empty");
      } else {
        alert(this.nameMessageError);
      }
      return;
    }

    if (!this.isAgePassed) {
      if (this.ageMessageError == "") {
        alert("Age can not be empty");
      } else {
        alert(this.ageMessageError)
      }
      return;
    }

    if (!this.isSalaryPerHourPassed) {
      if (this.salaryPerHourMessageError == "") {
        alert("Salary per hour can not be empty");
      } else {
        alert(this.salaryPerHourMessageError)
      }
      return;
    }

    if (!this.isPhonePassed) {
      if (this.phoneMessageError ==  "") {
        alert("Phone number can not empty");
      } else {
        alert(this.phoneMessageError)
      }
      return;
    }

    if (!this.isAddressPassed) {
      if (this.addressMessageError ==  "") {
        alert("Address can not be empty");
      } else {
        alert(this.addressMessageError)
      }
      return;
    }

    if (this.team == "Team") {
      alert("Team cann't be empty")
      return;
    }

    if (this.sex == "Sex") {
      alert("Sex cann't be empty")
      return;
    }

    if (this.isNamePassed && this.isAgePassed && this.isSalaryPerHourPassed && this.isPhonePassed && this.isAddressPassed && this.team != "team" && this.sex != "sex") {
      this.saveEmployeeService.saveEmployee(this.employee).subscribe((res: any) => {
        console.warn();
        this.activeModal.close('Close click')
        alert("Success")
      });
    }
  }
}
