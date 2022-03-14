import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working-date',
  templateUrl: './working-date.component.html',
  styleUrls: ['./working-date.component.scss']
})
export class WorkingDateComponent implements OnInit {
  workingDate = new Date("2019-01-16");
  workingDates =[
    {id: 1, date: this.workingDate.toLocaleDateString(), hour:8 }] 
  constructor() { }

  ngOnInit(): void {
  }

}
