import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.scss']
})
export class WorkingComponent implements OnInit {
  step:number = 4;
  constructor() { }

  ngOnInit(): void {
  }

}
