import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Team } from '../../../model/team.model'

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

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  setTeamName(name:string) {
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
}
