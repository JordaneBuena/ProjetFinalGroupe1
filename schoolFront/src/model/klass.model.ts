import {Teacher} from "./teacher.model";
import {Planning} from "./planning.model";

export interface Klass {
  id: number,
  name: string,
  planning: Planning,
  principalTeacher: Teacher
}
