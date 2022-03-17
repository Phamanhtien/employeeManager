import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WorkingAdvance } from '../model/workingAdvance.model';

@Injectable({
  providedIn: 'root'
})
export class GetTotalWorkingAdvanceService {
  private apiUrl:string = 'http://localhost:8080/employeeWorking/advance/all';
  employeeId: number = 0;
  pageNumber: number = 0;

  setEmployeeId(employeeId: number) {
    this.employeeId = employeeId;
  }

  constructor(private httpClient: HttpClient) { }

  getAllEmployeesWithoutPaging(): Observable<number> {
    return this.httpClient.get<number>(this.apiUrl + "/" + this.employeeId).pipe(
    )
  }
}

@Injectable({
  providedIn: 'root'
})
export class WorkingAdvanceListWithPagingService {
  private apiUrl:string = 'http://localhost:8080/employeeWorking/advance/all';
  employeeId: number = 0;
  pageNumber: number = 0;

  setEmployeeId(employeeId: number) {
    this.employeeId = employeeId;
  }

  setPageNumber(pageNumber: number) {
    this.pageNumber = pageNumber;
  }

  constructor(private httpClient: HttpClient) { }

  getAllWorkingAdvanceOfAnEmployeesWithPaging(): Observable<WorkingAdvance[]> {
    return this.httpClient.get<WorkingAdvance[]>(this.apiUrl + "/" +this.employeeId+"/" + this.pageNumber).pipe(
    )
  }
}


@Injectable({
  providedIn: 'root'
})
export class SaveWorkingAdvanceService {
  private apiUrl:string = 'http://localhost:8080/employeeWorking/advance/add';
  workingAdvance: WorkingAdvance = new WorkingAdvance();

  setWorkingAdvance(workingAdvance: WorkingAdvance) {
    this.workingAdvance = workingAdvance;
  }

  constructor(private httpClient: HttpClient) { }

  saveWorkingAdvance(): Observable<WorkingAdvance[]> {
    return this.httpClient.post<WorkingAdvance[]>(this.apiUrl, this.workingAdvance).pipe()
  }
}

@Injectable({
  providedIn: 'root'
})
export class DeleteWorkingAdvanceService {
  private apiUrl:string = 'http://localhost:8080/employeeWorking/advance/delete';
  workingAdvance: WorkingAdvance = new WorkingAdvance();

  setWorkingDate(workingAdvance: WorkingAdvance) {
    this.workingAdvance = workingAdvance;
  }

  constructor(private httpClient: HttpClient) { }

  deleteWorkingAdvance() {
    return this.httpClient.request('delete',this.apiUrl, {body:this.workingAdvance}).pipe()
  }
}

