import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchoolComponent } from './school/school.component';
import { SchoolListComponent } from './school-list/school-list.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'schools', component: SchoolListComponent },
  {path: 'schools/:id', component: SchoolComponent },
  {path:'', redirectTo: 'schools', pathMatch:'full'}];
@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    SchoolListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
