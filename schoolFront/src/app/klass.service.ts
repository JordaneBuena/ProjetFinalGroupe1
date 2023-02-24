import { Injectable } from '@angular/core';
import {environment} from "../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Teacher} from "../model/teacher.model";
import {SchoolModel} from "../model/school.model";
import {Klass} from "../model/klass.model";

@Injectable({
  providedIn: 'root'
})
export class KlassService {

  url = `${environment.urlApi}${environment.klassSuffix}`

  constructor(private http: HttpClient) { }


  findAll(): Observable<Klass[]> {
    return this.http.get<Klass[]>(this.url)
  }

  findOne(id : number): Observable<Klass> {
    return this.http.get<Klass>(`${this.url}/${id}`)
  }

  add(value: SchoolModel): Observable<Klass> {
    console.log(value)
    return this.http.post<Klass>(`${this.url}`,value)
  }

  modify(value: Teacher): Observable<Klass> {
    return this.http.put<Klass>(`${this.url}`, value)
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
