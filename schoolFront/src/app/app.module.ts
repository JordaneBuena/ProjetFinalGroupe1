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
import {DatePipe, registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import { KlassAddComponent } from './klass-add/klass-add.component';
import { KlassDetailComponent } from './klass-detail/klass-detail.component';
import { KlassListComponent } from './klass-list/klass-list.component';
import { ClassRoomComponent } from './class-room/class-room.component';
import { ClassRoomListComponent } from './class-room-list/class-room-list.component';
import { ClassRoomDetailComponent } from './class-room-detail/class-room-detail.component';
import { ClassRoomAddComponent } from './class-room-add/class-room-add.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import { CalendarComponent } from './calendar/calendar.component';
import { TeacherSubjectModifyComponent } from './teacher-subject-modify/teacher-subject-modify.component';
import {ModalModule} from "ngx-bootstrap/modal";
import {NgDragDropModule} from "ng-drag-drop";
import {DragDropModule} from "@angular/cdk/drag-drop";
import { MenuComponent } from './menu/menu.component';
import { CourseAddComponent } from './course-add/course-add.component';

registerLocaleData(localeFr, 'fr');

const routes: Routes = [
  {path: 'schools', component: SchoolListComponent},
  {path: 'schools/calendar', component: CalendarComponent},
  {path: 'schools/param/:sId', component: SchoolParamComponent},
  {path: 'schools/:sId', component: SchoolDetailComponent},
  {path: 'schools/:sId/teachers', component: TeacherListComponent},
  {path: 'schools/:sId/teachers/add', component: TeacherAddComponent},
  {path: 'schools/:sId/teachers/:tId', component: TeacherDetailComponent},
  {path: 'schools/:sId/klasses', component: KlassListComponent},
  {path: 'schools/:sId/klasses/add', component: KlassAddComponent},
  {path: 'schools/:sId/klasses/:kId', component: KlassDetailComponent},
  {path: 'schools/:sId/rooms', component: ClassRoomListComponent},
  {path: 'schools/:sId/rooms/add', component: ClassRoomAddComponent},
  {path: 'schools/:sId/rooms/:rId', component: ClassRoomDetailComponent},
  {path: 'schools/:sId/subjects', component: SubjectListComponent},
  {path: 'schools/:sId/subjects/add', component: SubjectAddComponent},
  {path: 'schools/:sId/subjects/:sId', component: SubjectComponent},
  {path: 'schools/:sId/teachers/:tId/subjects/modify', component: TeacherSubjectModifyComponent},
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
    KlassListComponent,
    ClassRoomComponent,
    ClassRoomListComponent,
    ClassRoomDetailComponent,
    ClassRoomAddComponent,
    CalendarComponent,
    TeacherSubjectModifyComponent,
    MenuComponent,
    CourseAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    ReactiveFormsModule,
    HttpClientModule,
    FullCalendarModule,
    NgDragDropModule,
    ModalModule.forRoot(),
    DragDropModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr' }, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
