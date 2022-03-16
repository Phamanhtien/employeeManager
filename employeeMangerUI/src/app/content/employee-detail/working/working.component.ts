import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../../../model/employee.model';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.scss']
})
export class WorkingComponent implements OnInit {
  step:number = 1;

  @Input() employee:Employee;
  constructor() { }

  ngOnInit(): void {
  }

}
