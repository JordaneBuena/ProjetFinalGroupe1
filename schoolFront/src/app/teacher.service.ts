import { Injectable } from '@angular/core';
import {Teacher} from "../model/teacher.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment.development";
import {SchoolModel} from "../model/school.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  url = `${environment.urlApi}${environment.teacherSuffix}`

  constructor(private http: HttpClient) { }


  findAll(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.url)
  }

  findOne(id : number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.url}/${id}`)
  }

  add(value: SchoolModel): Observable<Teacher> {
    return this.http.post<Teacher>(`${this.url}`,value)
  }

  modify(value: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.url}`, value)
  }
}
