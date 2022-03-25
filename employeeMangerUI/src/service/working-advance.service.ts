import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WorkingAdvance } from '../model/workingAdvance.model';
import { EmployeeAdvanceApiList } from '../util/EmployeeAdvanceApiList';

@Injectable({
  providedIn: 'root'
})
export class GetNumberOfAllWorkingAdvancesOfAnEmployee {
  employeeId: number = 0;
  pageNumber: number = 0;

  setEmployeeId(employeeId: number) {
    this.employeeId = employeeId;
  }

  constructor(private httpClient: HttpClient) { }

  getNumberOfAllWorkingAdvancesOfAnEmployee(): Observable<number> {
    return this.httpClient.get<number>(EmployeeAdvanceApiList.getNumberOfAllWorkingAdvancesOfAnEmployee + this.employeeId).pipe()
  }
}

@Injectable({
  providedIn: 'root'
})
export class RetrieveAllWorkingAdvancesOfAnEmployee {
  employeeId: number = 0;
  pageNumber: number = 0;

  setEmployeeId(employeeId: number) {
    this.employeeId = employeeId;
  }

  setPageNumber(pageNumber: number) {
    this.pageNumber = pageNumber;
  }

  constructor(private httpClient: HttpClient) { }

  retrieveAllWorkingAdvancesOfAnEmployee(): Observable<WorkingAdvance[]> {
    return this.httpClient.get<WorkingAdvance[]>(EmployeeAdvanceApiList.retrieveAllWorkingAdvancesOfAnEmployee + this.employeeId + "/" + this.pageNumber).pipe(
    )
  }
}


@Injectable({
  providedIn: 'root'
})
export class AddWorkingAdvanceOfAnEmployeeService {
  workingAdvance: WorkingAdvance = new WorkingAdvance();

  setWorkingAdvance(workingAdvance: WorkingAdvance) {
    this.workingAdvance = workingAdvance;
  }

  constructor(private httpClient: HttpClient) { }

  addWorkingAdvanceOfAnEmployee(): Observable<WorkingAdvance[]> {
    return this.httpClient.post<WorkingAdvance[]>(EmployeeAdvanceApiList.addWorkingAdvanceOfAnEmployee, this.workingAdvance).pipe()
  }
}

@Injectable({
  providedIn: 'root'
})
export class DeleteWorkingAdvanceOfAnEmployeeService {
  workingAdvance: WorkingAdvance = new WorkingAdvance();

  setWorkingDate(workingAdvance: WorkingAdvance) {
    this.workingAdvance = workingAdvance;
  }

  constructor(private httpClient: HttpClient) { }

  deleteWorkingAdvanceOfAnEmployee() {
    return this.httpClient.request('delete', EmployeeAdvanceApiList.deleteWorkingAdvanceOfAnEmployee, { body: this.workingAdvance }).pipe()
  }
}

