import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigatorComponent } from './navigator/navigator.component';
import { EmployeeListComponent } from './content/employee-list/employee-list.component';
import { AddEmployeeComponent } from './content/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './content/delete-employee/delete-employee.component';
import { TeamListComponent } from './content/team-list/team-list.component';
import { EmployeeDetailComponent } from './content/employee-detail/employee-detail.component';
import { AvatarComponent } from './content/employee-detail/avatar/avatar.component';
import { WorkingComponent } from './content/employee-detail/working/working.component';
import { InformationsComponent } from './content/employee-detail/working/informations/informations.component';
import { AdvancesComponent } from './content/employee-detail/working/advances/advances.component';
import { StaticsComponent } from './content/employee-detail/working/statics/statics.component';
import { WorkingDateComponent} from './content/employee-detail/working/working-date/working-date.component';
import { AddTeamComponent } from './content/add-team/add-team.component';
import { SexPipePipe } from './sex-pipe.pipe';
import { AddWorkingDateComponent } from './content/add-working-date/add-working-date.component';
import { AddWorkingAdvanceComponent } from './content/add-working-advance/add-working-advance.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    TeamListComponent,
    EmployeeDetailComponent,
    AvatarComponent,
    WorkingComponent,
    InformationsComponent,
    AdvancesComponent,
    StaticsComponent,
    WorkingDateComponent,
    AddTeamComponent,
    SexPipePipe,
    AddWorkingDateComponent,
    AddWorkingAdvanceComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // HttpClient,
    // HttpHeaders,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
