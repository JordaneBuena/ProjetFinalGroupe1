import {SchoolModel} from "./school.model";

export interface Subject{
  id: number,
  name: string | undefined,
  color: string | undefined,
  school: SchoolModel
}
