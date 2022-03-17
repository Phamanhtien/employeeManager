import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { StatisticsRequest } from '../model/statictisRequest.model';
import { StaticsReponse } from '../model/statictisResponse.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class GetWorkingStaticService {
  private apiUrl:string = 'http://localhost:8080/employeeWorking/static';
  statisticsRequest: StatisticsRequest = new StatisticsRequest();

  setstatisticsRequest(statisticsRequest: StatisticsRequest) {
    this.statisticsRequest = statisticsRequest;
  }

  constructor(private httpClient: HttpClient) { }

  getStatictis(): Observable<StaticsReponse> {
    return this.httpClient.post<StaticsReponse>(this.apiUrl, this.statisticsRequest).pipe()
  }
}
