import { Injectable } from '@angular/core';
import {environment} from "../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Teacher} from "../model/teacher.model";
import {Course} from "../model/course.model";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url = `${environment.urlApi}${environment.courseSuffix}`

  constructor(private http: HttpClient) { }


  findAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url)
  }

  findOne(id : number): Observable<Course> {
    return this.http.get<Course>(`${this.url}/${id}`)
  }

  add(value: Course): Observable<Course> {
    console.log(value)
    return this.http.post<Course>(`${this.url}`,value)
  }

  modify(value: Course): Observable<Course> {
    return this.http.put<Course>(`${this.url}`, value)
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
