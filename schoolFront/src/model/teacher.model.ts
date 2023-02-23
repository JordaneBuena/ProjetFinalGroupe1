import {Subject} from "./subject.model";

export interface Teacher {
  id: number,
  lastName: string,
  firstName: string,
  dateOfBirth: Date,
  subjects: Subject[]
}
