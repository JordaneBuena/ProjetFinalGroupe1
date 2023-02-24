import {LOCALE_ID, NgModule} from '@angular/core';
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
import { KlassComponent } from './klass/klass.component';
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import { KlassAddComponent } from './klass-add/klass-add.component';
import { KlassDetailComponent } from './klass-detail/klass-detail.component';
import { KlassListComponent } from './klass-list/klass-list.component';


registerLocaleData(localeFr, 'fr');

const routes: Routes = [
  {path: 'schools', component: SchoolListComponent},
  {path: 'schools/param/:sId', component: SchoolParamComponent},
  {path: 'schools/:sId', component: SchoolDetailComponent},
  {path: 'schools/:sId/teachers', component: TeacherListComponent},
  {path: 'schools/:sId/teachers/add', component: TeacherAddComponent},
  {path: 'schools/:sId/teachers/:tId', component: TeacherDetailComponent},
  {path: 'schools/:sId/klasses', component: TeacherListComponent},
  {path: 'schools/:sId/klasses/add', component: TeacherAddComponent},
  {path: 'schools/:sId/klasses/:kId', component: TeacherDetailComponent},
  {path: 'schools/:sId/subjects', component: SubjectListComponent},
  {path: 'schools/:sId/subjects/add', component: SubjectAddComponent},
  {path: 'schools/:sId/subjects/:sId', component: SubjectComponent},
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
    SubjectAddComponent,
    KlassComponent,
    KlassAddComponent,
    KlassDetailComponent,
    KlassListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
