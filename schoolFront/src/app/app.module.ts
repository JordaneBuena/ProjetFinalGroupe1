import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchoolComponent } from './school/school.component';
import { SchoolListComponent } from './school-list/school-list.component';
import {RouterModule, Routes} from "@angular/router";
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { SchoolParamComponent } from './school-param/school-param.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  { path: 'schools', component: SchoolListComponent },
  {path: 'schools/param/:id', component: SchoolParamComponent },
  {path: 'schools/:id', component: SchoolDetailComponent },
  {path:'', redirectTo: 'schools', pathMatch:'full'}];
@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    SchoolListComponent,
    SchoolDetailComponent,
    SchoolParamComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
