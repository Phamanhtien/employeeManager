import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Employee } from './../model/employee.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}

const apiUrl = 'http://localhost:8080/employee/all';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListWithoutPagingService {

  constructor(private httpClient: HttpClient) {

  }

  getNumberOfEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(apiUrl).pipe(
    )
  }
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeListWithPagingService {

  private pageNumber: number = 0;

  setPageNumber(pageNumber: number) {
    this.pageNumber = pageNumber;
  }

  constructor(private httpClient: HttpClient) {

  }

  getAllEmployeesWithPaging(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(apiUrl + "/" + this.pageNumber).pipe(
    )
  }
}

const apiUrlSearch = 'http://localhost:8080/employee/search';
@Injectable({
  providedIn: 'root'
})
export class EmployeeListWithPagingByNameService {

  private pageNumber: number = 0;
  private searchByNameText: String = " "

  setPageNumber(pageNumber: number) {
    this.pageNumber = pageNumber;
  }

  setSearchByNameText(searchByNameText: String) {
    this.searchByNameText = searchByNameText;
  }

  constructor(private httpClient: HttpClient) {

  }

  getAllEmployeesWithPagingByName(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(apiUrlSearch + "/" + this.searchByNameText + "/" + this.pageNumber).pipe(
    )
  }
}

const apiUrlSaveEmployee = 'http://localhost:8080/employee/add';
@Injectable({
  providedIn: 'root'
})
export class SaveEmployeeService {

  constructor(private httpClient: HttpClient) {

  }

  saveEmployee(data: Employee){
    return this.httpClient.post(apiUrlSaveEmployee, data)
  }
}

const apiUrlDeleteEmployee = 'http://localhost:8080/employee/delete';
@Injectable({
  providedIn: 'root'
})
export class DeleteEmployeeService {
  data:number[] = [];
  constructor(private httpClient: HttpClient) {

  }

  deleteEmployee(){
    return this.httpClient.request('delete',apiUrlDeleteEmployee, {body: this.data} );
  }

  setData(data: number[]) {
    this.data = data;
  }
}

const apiUrlGetAnEmployee = 'http://localhost:8080/employee/';
@Injectable({
  providedIn: 'root'
})
export class GetAnEmployeeService {
  id: number = 0;

  constructor(private httpClient: HttpClient) {

  }


  getAnEmployee(){
    return this.httpClient.get(apiUrlGetAnEmployee+this.id);
  }

  setId (id: number) {
    this.id = id;
  }
}


const apiUrlUpdateEmployee = 'http://localhost:8080/employee/update';
@Injectable({
  providedIn: 'root'
})
export class UpdateEmployeeService {

  employee: Employee = new Employee();

  constructor(private httpClient: HttpClient) {

  }

  public setEmployee (employee:Employee) {
    this.employee = employee;
  }

  saveEmployee(){
    return this.httpClient.post(apiUrlUpdateEmployee, this.employee)
  }
}


@Injectable({
  providedIn: 'root'
})
export class EmployeeListWithoutPagingByNameService {

  private searchByNameText: String = " "

  setSearchByNameText(searchByNameText: String) {
    this.searchByNameText = searchByNameText;
  }

  constructor(private httpClient: HttpClient) {

  }

  getAllEmployeesWithPagingByName(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(apiUrlSearch + "/" + this.searchByNameText).pipe(
    )
  }
}