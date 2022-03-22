import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Team } from './../model/team.model';
import { Employee } from './../model/employee.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}

const teamApiUrl = 'http://localhost:8080/team/all';

@Injectable({
  providedIn: 'root'
})
export class TeamListService {

  constructor(private httpClient: HttpClient) { }

  getAllTeam(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(teamApiUrl).pipe(
    )
  }
}


const teamMemberListApiUrl = 'http://localhost:8080/team';
@Injectable({
  providedIn: 'root'
})
export class TeamMemberListService {
  teamId: number = -1;
  constructor(private httpClient: HttpClient) { }

  getAllTeamMembers(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(teamMemberListApiUrl+"/"+this.teamId+"/members").pipe(
    )
  }

  setTeamId(teamId: number) {
    this.teamId = teamId;
  }
}

const teamByIdApiUrl = 'http://localhost:8080/team';
@Injectable({
  providedIn: 'root'
})
export class TeamByIdService {
  teamId: number = 0;
  constructor(private httpClient: HttpClient) { }

  getTeamById(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(teamMemberListApiUrl+"/"+this.teamId).pipe(
    )
  }

  setTeamId(teamId: number) {
    this.teamId = teamId;
  }
}

const addTeamApiUrl = "http://localhost:8080/team/add";
@Injectable({
  providedIn: 'root'
})
export class AddTeamService {
  
  team: Team = new Team();

  constructor(private httpClient: HttpClient) { }

  setTeam (team: Team) {
    this.team = team;
  }

  saveTeam(){
    return this.httpClient.post(addTeamApiUrl, this.team).pipe()
  }
}