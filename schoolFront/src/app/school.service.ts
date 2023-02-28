import { Injectable } from '@angular/core';
import {SchoolModel} from "../model/school.model";
import {TypeSchool} from "../model/typeSchool.enum";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment.development";
import {Teacher} from "../model/teacher.model";
import {Subject} from "../model/subject.model";
import {Klass} from "../model/klass.model";
import {ClassRoom} from "../model/classRoom.model";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  url = `${environment.urlApi}${environment.schoolSuffix}`

  constructor(private http: HttpClient) { }


  findAll(): Observable<SchoolModel[]> {
    return this.http.get<SchoolModel[]>(this.url)
  }

  findAllTeacherBySchool(id: number): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.url}/${id}/professeurs`)
  }

  findAllSubjectBySchool(id: number): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.url}/${id}/matieres`)
  }

  findAllKlassesBySchool(id: number): Observable<Klass[]> {
    return this.http.get<Klass[]>(`${this.url}/${id}/classes`)
  }

  findAllClassroomsBySchool(id: number): Observable<ClassRoom[]> {
    return this.http.get<ClassRoom[]>(`${this.url}/${id}/salles`)
  }


  findOne(id : number): Observable<SchoolModel> {
    return this.http.get<SchoolModel>(`${this.url}/${id}`)
  }

  add(value: SchoolModel): Observable<SchoolModel> {
    return this.http.post<SchoolModel>(`${this.url}`,value)
  }

  modify(value: SchoolModel): Observable<SchoolModel> {
    return this.http.post<SchoolModel>(`${this.url}/${value.id}`, value)
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
