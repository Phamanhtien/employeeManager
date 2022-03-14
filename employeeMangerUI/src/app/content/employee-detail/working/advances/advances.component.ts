import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advances',
  templateUrl: './advances.component.html',
  styleUrls: ['./advances.component.scss']
})
export class AdvancesComponent implements OnInit {
  advanceDate = new Date("2019-01-16");
  advances =[
    {id: 1, date: this.advanceDate.toLocaleDateString(), money:60 }] 
  constructor() { }

  ngOnInit(): void {
  }

}
