import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  totalTeam: number = 6;
  teams = [
    {id: 1, name: "IT Support"},
    {id: 1, name: "IT Support"},
    {id: 1, name: "IT Support"},
    {id: 1, name: "IT Support"},
    {id: 1, name: "IT Support"},
    {id: 1, name: "IT Support"},
    {id: 1, name: "IT Support"}
  ];

  teamMembers = [
    {id: 1, name: "Trần Thị Hương", phone: "093623222", address:"TP Ho Chi Minh", sex:"Male"},
    {id: 1, name: "Trần Thị Hương", phone: "093623222", address:"TP Ho Chi Minh", sex:"Male"},
    {id: 1, name: "Trần Thị Hương", phone: "093623222", address:"TP Ho Chi Minh", sex:"Male"},
    {id: 1, name: "Trần Thị Hương", phone: "093623222", address:"TP Ho Chi Minh", sex:"Male"},
    {id: 1, name: "Trần Thị Hương", phone: "093623222", address:"TP Ho Chi Minh", sex:"Male"},
    {id: 1, name: "Trần Thị Hương", phone: "093623222", address:"TP Ho Chi Minh", sex:"Male"},
    {id: 1, name: "Trần Thị Hương", phone: "093623222", address:"TP Ho Chi Minh", sex:"Male"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
