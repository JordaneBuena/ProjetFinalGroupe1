import { Injectable } from '@angular/core';
import {Subject} from "../model/subject.model";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjects : Subject[] = [
    { id: 0,
      name : "Philosophie",
      colour : "orange"},
    { id: 1,
      name : "Français",
      colour : "blue"},
    { id: 2,
      name : "SVT",
      colour : "green"}
    ]
  constructor() { }

  getAll() {
    return this.subjects;
  }
  getOne(id : number) {
    return this.subjects[id];
  }
  
}
