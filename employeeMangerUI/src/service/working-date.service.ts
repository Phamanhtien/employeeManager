import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WorkingDate } from '../model/workingDate.model'
import { EmployeeDateApiList } from '../util/EmployeeDateApiList'

@Injectable({
  providedIn: 'root'
})
export class GetNumberOfAllWorkingDateOfAnEmployeeService {
  employeeId: number = 0;
  pageNumber: number = 0;

  setEmployeeId(employeeId: number) {
    this.employeeId = employeeId;
  }

  constructor(private httpClient: HttpClient) { }

  getNumberOfAllWorkingDateOfAnEmployee(): Observable<number> {
    return this.httpClient.get<number>(EmployeeDateApiList.getNumberOfAllWorkingDateOfAnEmployee + this.employeeId).pipe(
    )
  }
}



@Injectable({
  providedIn: 'root'
})
export class RetrieveAllWorkingDateOfAnEmployeeWithPagingService {
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
    return this.httpClient.get<WorkingDate[]>(EmployeeDateApiList.retrieveAllWorkingDateOfAnEmployeeWithPaging +this.employeeId+"/" + this.pageNumber).pipe(
    )
  }
}

@Injectable({
  providedIn: 'root'
})
export class AddWorkingDateOfAnEmployeeService {
  private apiUrl:string = '';
  workingDate: WorkingDate = new WorkingDate();

  setWorkingDate(workingDate: WorkingDate) {
    this.workingDate = workingDate;
  }

  constructor(private httpClient: HttpClient) { }

  addWorkingDateOfAnEmployee(): Observable<WorkingDate[]> {
    return this.httpClient.post<WorkingDate[]>(EmployeeDateApiList.addWorkingDateOfAnEmployee, this.workingDate).pipe()
  }
}

@Injectable({
  providedIn: 'root'
})
export class DeleteWorkingDateService {
  workingDate: WorkingDate = new WorkingDate();

  setWorkingDate(workingDate: WorkingDate) {
    this.workingDate = workingDate;
  }

  constructor(private httpClient: HttpClient) { }

  deleteWorkingDate() {
    return this.httpClient.request('delete',EmployeeDateApiList.deleteWorkingDateOfAnEmployee, {body:this.workingDate}).pipe()
  }
}

