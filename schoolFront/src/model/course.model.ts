import {Teacher} from "./teacher.model";
import {Planning} from "./planning.model";
import {SchoolModel} from "./school.model";
import {Time} from "@angular/common";
import {ClassRoom} from "./classRoom.model";
import {Subject} from "./subject.model";

export interface Course {
  id: number,
  start: Time,
  end: Time,
  day: string,
  teacher: Teacher,
  classroom:ClassRoom,
  subject:Subject,
  planning:Planning,
  school: SchoolModel

}
