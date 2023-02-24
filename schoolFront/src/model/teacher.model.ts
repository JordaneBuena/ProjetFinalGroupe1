import {Subject} from "./subject.model";

export interface Teacher {
  id: number,
  lastName: string,
  firstName: string,
  dateOfBirth: Date,
  principaleKlass: {
    id: number,
    name: string
  }
  subjects: Subject[]
  school: {
    id: number
  }
}
