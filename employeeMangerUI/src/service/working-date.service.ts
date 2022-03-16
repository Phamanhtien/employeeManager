import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WorkingDate } from '../model/workingDate.model'

@Injectable({
  providedIn: 'root'
})
export class WorkingDateListWithoutPagingService {
  private apiUrl:string = 'http://localhost:8080/employeeWorking/date/all';
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
export class WorkingDateListWithPagingService {
  private apiUrl:string = 'http://localhost:8080/employeeWorking/date/all';
  employeeId: number = 0;
  pageNumber: number = 0;

  setEmployeeId(employeeId: number) {
    this.employeeId = employeeId;
  }

  setPageNumber(pageNumber: number) {
    this.pageNumber = pageNumber;
  }

  constructor(private httpClient: HttpClient) { }

  getAllWorkingDateOfAnEmployeesWithPaging(): Observable<WorkingDate[]> {
    return this.httpClient.get<WorkingDate[]>(this.apiUrl + "/" +this.employeeId+"/" + this.pageNumber).pipe(
    )
  }
}

@Injectable({
  providedIn: 'root'
})
export class SaveWorkingDateService {
  private apiUrl:string = 'http://localhost:8080/employeeWorking/date/add';
  workingDate: WorkingDate = new WorkingDate();

  setWorkingDate(workingDate: WorkingDate) {
    this.workingDate = workingDate;
  }

  constructor(private httpClient: HttpClient) { }

  saveWorkingDate(): Observable<WorkingDate[]> {
    return this.httpClient.post<WorkingDate[]>(this.apiUrl, this.workingDate).pipe()
  }
}

@Injectable({
  providedIn: 'root'
})
export class DeleteWorkingDateService {
  private apiUrl:string = 'http://localhost:8080/employeeWorking/date/delete';
  workingDate: WorkingDate = new WorkingDate();

  setWorkingDate(workingDate: WorkingDate) {
    this.workingDate = workingDate;
  }

  constructor(private httpClient: HttpClient) { }

  deleteWorkingDate() {
    return this.httpClient.request('delete',this.apiUrl, {body:this.workingDate}).pipe()
  }
}

