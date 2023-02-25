import {SchoolModel} from "./school.model";

export interface Subject{
  id: number,
  name: string,
  color: string,
  school: SchoolModel
}
