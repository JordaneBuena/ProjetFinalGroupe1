import { Injectable } from '@angular/core';
import {Teacher} from "../model/teacher.model";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teachers: Teacher[] = [
    {
      id: 0,
      lastName: 'Billy',
      firstName: 'Willy',
      dateOfBirth: new Date(),
      subjects: [
        {
          id: 0,
          name: 'Bio',
          colour: 'green'
        }
      ]
    }
  ]

  constructor() { }

  getAll() {
    return this.teachers;
  }
}
