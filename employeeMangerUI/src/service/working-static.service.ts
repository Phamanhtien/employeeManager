import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { StatisticsRequest } from '../model/statictisRequest.model';
import { StaticsReponse } from '../model/statictisResponse.model';
import { EmployeeStatisticApiList } from '../util/EmployeeStatisticApiList';

@Injectable({
  providedIn: 'root'
})
export class GetStaticEmployeeWorkingService {
  private apiUrl:string = 'http://localhost:8080/employeeWorking/static';
  statisticsRequest: StatisticsRequest = new StatisticsRequest();

  setstatisticsRequest(statisticsRequest: StatisticsRequest) {
    this.statisticsRequest = statisticsRequest;
  }

  constructor(private httpClient: HttpClient) { }

  getStaticEmployeeWorking(): Observable<StaticsReponse> {
    return this.httpClient.post<StaticsReponse>(EmployeeStatisticApiList.getStaticEmployeeWorking, this.statisticsRequest).pipe()
  }
}
