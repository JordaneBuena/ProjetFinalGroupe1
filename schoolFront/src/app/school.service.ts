import { Injectable } from '@angular/core';
import {SchoolModel} from "../model/school.model";
import {TypeSchool} from "../model/typeSchool.enum";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private schools: SchoolModel[]=[
    {
      id : 1,
      name :"collegeFouFouFou",
      address : "15 rue kjbdsf 34500 jkdnf",
      typeSchool : TypeSchool.COLLEGE,
      phone : "01 23 45 69 87",
      logo : "image"
    },
    {
      id : 2,
      name :"Lyceekjhfdiuh",
      address : "15 rue kjbdsf 34500 jkdnf",
      typeSchool : TypeSchool.LYCEE,
      phone : "01 23 45 69 87",
      logo : "image"
    }
  ]
  constructor() { }


  findAll(): SchoolModel[] {
    return this.schools;
  }

  findOne(id : number):SchoolModel {
    return this.schools[id];
  }
}
