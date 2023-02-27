import {Subject} from "./subject.model";
import {SchoolModel} from "./school.model";
import {Klass} from "./klass.model";

export interface Teacher {
  id: number,
  lastName: string,
  firstName: string,
  dateOfBirth: Date,
  principaleKlass: Klass,
  school: SchoolModel,
  subjects: Subject[]

}
