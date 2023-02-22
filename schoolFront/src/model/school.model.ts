import {TypeSchool} from "./typeSchool.enum";

export interface SchoolModel {
  id : number,
  name : string;
  address : string;
  typeSchool : TypeSchool;
  phone : string;
  logo : string;

}
