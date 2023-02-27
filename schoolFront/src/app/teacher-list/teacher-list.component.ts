import {Component, OnInit} from '@angular/core';
import {Teacher} from "../../model/teacher.model";
import {SchoolService} from "../school.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit{

  teachers: Teacher[] = []

  constructor(private schoolServ: SchoolService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("sId") || "";
    if (id != '') {
      this.schoolServ.findAllTeacherBySchool(+id).subscribe(v => this.teachers = v)
    }
  }

}
