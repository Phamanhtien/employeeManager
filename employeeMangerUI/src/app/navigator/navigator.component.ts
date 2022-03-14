import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})

// this is a navigator component
// it will be get tabId and return tabs
// if tabId is minus one that mean the tabs is employee
// if tabId is minus two that means the tabs is team
// if tabs is a sign number that mean the tabs is display an employee'detail
// Want to add some static tab use a unique negative number as tabId
export class NavigatorComponent implements OnInit {
  endPoint: string = "";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.endPoint = window.location.pathname;
    console.log(this.endPoint);
  }
}

