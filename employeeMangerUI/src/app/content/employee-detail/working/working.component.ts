import { Component,ViewChild, OnInit, Input } from '@angular/core';
import { Employee } from '../../../../model/employee.model';
import { InformationsComponent } from './informations/informations.component';
@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.scss']
})
export class WorkingComponent implements OnInit {
  @Input() employee:Employee;
  @ViewChild(InformationsComponent) informationsComponent;

  step:number = 1;
  editEmployeeData:Employee = new Employee();
  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.editEmployeeData = this.informationsComponent.employee;
  }
}
