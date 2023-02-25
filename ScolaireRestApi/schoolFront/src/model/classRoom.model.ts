import {Subject} from "./subject.model";
import {SchoolModel} from "./school.model";

export interface ClassRoom {
  id: number,
  name: string,
  subjectsExcluded: Subject[],
  capacite: number,
  school: SchoolModel
}
