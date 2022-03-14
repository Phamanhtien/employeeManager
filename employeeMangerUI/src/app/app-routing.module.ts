import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './content/employee-list/employee-list.component';
import { TeamListComponent } from './content/team-list/team-list.component';
import { EmployeeDetailComponent } from './content/employee-detail/employee-detail.component';
 
const routes: Routes = [
    {
        path: "employee",
        component: EmployeeListComponent
    },
    {
        path: "team",
        component: TeamListComponent
    },
    {
        path: "employee-detail/:eId",
        component: EmployeeDetailComponent
    },
    // {
    //     path: "**"
    // }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }