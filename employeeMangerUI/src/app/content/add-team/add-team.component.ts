import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Team } from '../../../model/team.model';
import { Employee } from '../../../model/employee.model';
import { EmployeeListWithoutPagingByNameService} from '../../../service/employee.service';
import { AddTeamService } from '../../../service/team.service'

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  team: Team = new Team();
  nameMessageError: string = "";
  isNamePassed = false;
  nameLength = 0;
  isTeamPassed = false;
  teamManagerMessageError = "";
  employeeList: Employee[] = [];
  employeeName: string = "";

  constructor(
    public activeModal: NgbActiveModal,
    private employeeListWithoutPagingByNameService: EmployeeListWithoutPagingByNameService,
    private addTeamService: AddTeamService,
  ) { }

  ngOnInit(): void {
  }

  getEmployeeByName(employeeName: string) {
    if (employeeName.trim() !== '') {
      this.employeeListWithoutPagingByNameService.setSearchByNameText(employeeName.trim());
      this.employeeListWithoutPagingByNameService.getAllEmployeesWithoutPagingByName().subscribe((res: any) => {
        this.employeeList = res;
        console.log(this.employeeList)
      });
    }


  }

  setTeamManager(employeeId: number, employeeFullName: string) {
    if (employeeFullName.trim() == "") {
      this.teamManagerMessageError = "Team manager is not set";
      this.isNamePassed = false;
    }

    this.employeeName = employeeFullName;
    this.team.setManagerId(employeeId);
  }

  setTeamName(name: string) {
    this.nameLength = name.length;
    if (name == "") {
      this.nameMessageError = "Name can not be empty";
      this.nameLength = name.length;
      this.isNamePassed = false
    } else {
      this.nameMessageError = ""
      this.nameLength = name.length;
      this.isNamePassed = true;
      this.team.setName(name);
    }
  }

  saveTeam() {
    this.addTeamService.setTeam(this.team);
    this.addTeamService.saveTeam().subscribe((res: any) => {
      console.warn();
      alert("Success!");
      window.location.reload();
    })
  }
}
