import { Injectable } from '@angular/core';
import {SchoolModel} from "../model/school.model";
import {TypeSchool} from "../model/typeSchool.enum";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment.development";
import {Teacher} from "../model/teacher.model";

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

  findOne(id : number): Observable<SchoolModel> {
    return this.http.get<SchoolModel>(`${this.url}/${id}`)
  }

  add(value: SchoolModel): Observable<SchoolModel> {
    return this.http.post<SchoolModel>(`${this.url}`,value)
  }

  modify(value: SchoolModel): Observable<SchoolModel> {
    return this.http.put<SchoolModel>(`${this.url}`, value)
  }
}
