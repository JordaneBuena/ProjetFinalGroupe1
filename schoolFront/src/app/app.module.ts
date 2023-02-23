import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SchoolComponent} from './school/school.component';
import {SchoolListComponent} from './school-list/school-list.component';
import {RouterModule, Routes} from "@angular/router";
import {SchoolDetailComponent} from './school-detail/school-detail.component';
import {SchoolParamComponent} from './school-param/school-param.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TeacherListComponent} from './teacher-list/teacher-list.component';
import {TeacherComponent} from './teacher/teacher.component';
import {TeacherDetailComponent} from './teacher-detail/teacher-detail.component';
import {TeacherAddComponent} from './teacher-add/teacher-add.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: 'schools', component: SchoolListComponent},
  {path: 'schools/param/:sId', component: SchoolParamComponent},
  {path: 'schools/:sId', component: SchoolDetailComponent},
  {path: 'schools/:sId/teachers', component: TeacherListComponent},
  {path: 'schools/:sId/teachers/:tId', component: TeacherDetailComponent},
  {path: 'schools/:sId/subjects', component: SubjectListComponent},
  {path: '', redirectTo: 'schools', pathMatch: 'full'}];

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    SchoolDetailComponent,
    SchoolListComponent,
    SchoolParamComponent,
    TeacherListComponent,
    TeacherComponent,
    TeacherDetailComponent,
    TeacherAddComponent,
    SubjectComponent,
    SubjectListComponent,
    SubjectAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
