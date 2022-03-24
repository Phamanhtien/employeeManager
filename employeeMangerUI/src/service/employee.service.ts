import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from './../model/employee.model';
import { EmployeeApiList } from '../util/EmployeeApiList'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class GetNumberOfAllEmployee {

  constructor(private httpClient: HttpClient) {

  }

  getNumberOfEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(EmployeeApiList.getNumberOfAllEmployee).pipe(
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
    return this.httpClient.get<Employee[]>(EmployeeApiList.retrieveAllEmployeeWithPaging + this.pageNumber).pipe(
    )
  }
}


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
    return this.httpClient.get<Employee[]>(EmployeeApiList.retrieveEmployeeByNameWithPaging + this.searchByNameText + "/" + this.pageNumber).pipe(
    )
  }
}


@Injectable({
  providedIn: 'root'
})
export class AddEmployeeSerivece {

  constructor(private httpClient: HttpClient) {

  }

  saveEmployee(data: Employee){
    return this.httpClient.post(EmployeeApiList.addEmployee, data)
  }
}

@Injectable({
  providedIn: 'root'
})
export class DeleteEmployeeService {
  data:number[] = [];
  constructor(private httpClient: HttpClient) {

  }

  deleteEmployee(){
    return this.httpClient.request('delete',EmployeeApiList.deleteEmployee, {body: this.data} );
  }

  setData(data: number[]) {
    this.data = data;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GetAnEmployeeService {
  id: number = 0;

  constructor(private httpClient: HttpClient) {

  }


  getAnEmployee(){
    return this.httpClient.get(EmployeeApiList.retrieveEmployee+this.id);
  }

  setId (id: number) {
    this.id = id;
  }
}


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
    return this.httpClient.post(EmployeeApiList.updateEmployee, this.employee)
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

  getAllEmployeesWithoutPagingByName(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(EmployeeApiList.retrieveEmployeeByNameWithPaging + this.searchByNameText).pipe(
    )
  }
}


@Injectable({
  providedIn: 'root'
})
export class UploadEmployeeImageService {

  private employeeId:number = 0;
  private image:any;

  setEmployeeId(employeeId:number) {
    this.employeeId = employeeId;
  }

  setImage(image:any) {
    this.image = image;
  }
  constructor(private httpClient: HttpClient) {

  }


  uploadEmployeeImage() {
    const formData = new FormData();
    formData.append("file",this.image)
    formData.append("employeeId", this.employeeId.toString())
    return this.httpClient.post(EmployeeApiList.uploadImage,formData ).pipe(
    )
  }
}

