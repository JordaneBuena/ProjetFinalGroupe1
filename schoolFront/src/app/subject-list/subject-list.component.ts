import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "../../model/subject.model";
import {SubjectService} from "../subject.service";
import {SchoolService} from "../school.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit{

  subjects : Subject[] = [];
  subjects2 : Subject[] = [];

  constructor(private subServ: SubjectService,
              private schoolServ: SchoolService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("sId") || "";
    if (id != '') {
      this.schoolServ.findAllSubjectBySchool(+id).subscribe(v => this.subjects = v)
      this.schoolServ.findAllSubjectBySchool(+id).subscribe(v => this.subjects2 = v.filter(subject => subject.color != 'white'))

    }
  }

}
