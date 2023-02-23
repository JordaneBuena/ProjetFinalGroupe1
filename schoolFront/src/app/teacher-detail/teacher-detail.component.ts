import {Component, OnInit} from '@angular/core';
import {SchoolModel} from "../../model/school.model";
import {SchoolService} from "../school.service";
import {ActivatedRoute} from "@angular/router";
import {Teacher} from "../../model/teacher.model";
import {TeacherService} from "../teacher.service";

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit{

  teacher: Teacher | undefined;

  constructor(private sServ: TeacherService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("tId") || "";
    if (id != '') {
      this.sServ.findOne(+id).subscribe(v => this.teacher = v)
    }
  }

}
