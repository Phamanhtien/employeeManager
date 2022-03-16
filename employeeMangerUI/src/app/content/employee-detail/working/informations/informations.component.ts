import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../../../../model/employee.model';
import { Team } from '../../../../../model/team.model';
import { TeamByIdService, TeamListService } from '../../../../team.service';
@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  @Input() employee: Employee;
  team: Team = new Team();
  teamList: Team[] = [];

  addressMessageError:string = "";
  isAddressPassed = false;
  salaryPerHourMessageError: string = "";
  isSalaryPerHourPassed: boolean = false;
  teamName:string = "";
  constructor(
    private teamByIdService: TeamByIdService,
    private teamListService: TeamListService,
  ) { }

  ngOnInit(): void {
    this.getTeamById();
    this.getTeamList();
    
  }

  getTeamList() {
    this.teamListService.getAllTeam().subscribe((res: any) => {
      this.teamList = res;
    })
  }

  getTeamById() {
    this.teamByIdService.setTeamId(this.employee.teamId);
    this.teamByIdService.getTeamById().subscribe((res: any) => {
      this.team = res;
      this.teamName = this.team.name;
    })
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

  setEmployeeStartDate(employeeStartDate: Date) {
    this.employee.setStartDate(employeeStartDate);
  }

  setEmployeeSalaryPerHour(salaryPerHour: number) {
    if (isNaN(Number(salaryPerHour))) {
      this.salaryPerHourMessageError = "Salary per hour has to be a number";
      this.isSalaryPerHourPassed = false;
      console.log("Salary per hour has to be a number")
    }
    else {
      this.salaryPerHourMessageError = "";
      this.isSalaryPerHourPassed = true;
      this.employee.setSalaryPerHour(salaryPerHour);
    }
  }

  setTeamId(teamId: any, teamName: any) {
    console.log("ok");
    this.employee.setTeamId(teamId);
    this.teamName = teamName;
  }
}
