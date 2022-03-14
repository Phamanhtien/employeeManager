import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Team } from './../model/team.model';

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
