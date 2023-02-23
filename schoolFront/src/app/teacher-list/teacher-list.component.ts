import {Component, OnInit} from '@angular/core';
import {Teacher} from "../../model/teacher.model";
import {TeacherService} from "../teacher.service";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit{

  teachers: Teacher[] = []

  constructor(private teachServ: TeacherService) {
  }

  ngOnInit(): void {
    this.teachServ.findOne(1).subscribe(v => this.teachers = [v,v])
  }

}
