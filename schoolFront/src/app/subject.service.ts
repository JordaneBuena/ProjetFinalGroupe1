import { Injectable } from '@angular/core';
import {Subject} from "../model/subject.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment.development";
import {Observable} from "rxjs";
import {SchoolModel} from "../model/school.model";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  url = `${environment.urlApi}${environment.subjectSuffix}`;
  constructor(private http:HttpClient){};

  getAll(): Observable<Subject[]>  {
    return this.http.get<Subject[]>(this.url);
  }

  getOne(id : number): Observable<Subject> {
    return this.http.get<Subject>(`${this.url}/${id}`)
  }

  add(value: SchoolModel): Observable<Subject> {
    return this.http.post<Subject>(`${this.url}`,value)
  }

  delete(id : number): Observable<Subject> {
    return this.http.delete<Subject>(`${this.url}/${id}`)
  }
}
