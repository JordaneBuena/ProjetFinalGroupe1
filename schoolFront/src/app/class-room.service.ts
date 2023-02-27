import { Injectable } from '@angular/core';
import {environment} from "../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Klass} from "../model/klass.model";
import {SchoolModel} from "../model/school.model";
import {Teacher} from "../model/teacher.model";
import {ClassRoom} from "../model/classRoom.model";

@Injectable({
  providedIn: 'root'
})
export class ClassRoomService {

  url = `${environment.urlApi}${environment.classRoomSuffix}`

  constructor(private http: HttpClient) { }


  findAll(): Observable<ClassRoom[]> {
    return this.http.get<ClassRoom[]>(this.url)
  }

  findOne(id : number): Observable<ClassRoom> {
    return this.http.get<ClassRoom>(`${this.url}/${id}`)
  }

  add(value: ClassRoom): Observable<ClassRoom> {
    console.log(value)
    return this.http.post<ClassRoom>(`${this.url}`,value)
  }

  modify(value: ClassRoom): Observable<ClassRoom> {
    return this.http.put<ClassRoom>(`${this.url}`, value)
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
