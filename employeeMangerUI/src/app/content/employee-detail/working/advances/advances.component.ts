import { Component, OnInit } from '@angular/core';
import { WorkingAdvance } from '../../../../../model/workingAdvance.model'
@Component({
  selector: 'app-advances',
  templateUrl: './advances.component.html',
  styleUrls: ['./advances.component.scss']
})
export class AdvancesComponent implements OnInit {
  advanceDate = new Date("2019-01-16");
  workingAdvanceList: WorkingAdvance[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
