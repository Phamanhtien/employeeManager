import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { AddTeamComponent } from '../add-team/add-team.component'
import {
  TeamListService,
  TeamMemberListService
} from '../../team.service'
import { Team } from '../../../model/team.model';
import { Employee } from '../../../model/employee.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teamList: Team[] = [];
  totalTeam: number = 0;
  teamMembers: Employee[] = [];

  constructor(
    private modalService: NgbModal,
    private teamListService: TeamListService,
    private teamMemberListService: TeamMemberListService) { }

  ngOnInit(): void {
    this.getAllTeam();
  }

  openTeamEmployee() {
    const modalRef = this.modalService.open(AddTeamComponent);
    modalRef.componentInstance.name = 'addTeam';
  }

  getAllTeam() {
    this.teamListService.getAllTeam().subscribe((res: any) => {
      this.teamList = res
      this.totalTeam = this.teamList.length;
    })
  }

  getAllTeamMember(teamId:number) {
    this.teamMemberListService.setTeamId(teamId);
    this.teamMemberListService.getAllTeamMembers().subscribe((res: any) => {
      this.teamMembers = res;
      console.log(this.teamMembers)
    })
  }
}
