import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "../../model/subject.model";
import {SchoolService} from "../school.service";
import {ActivatedRoute} from "@angular/router";
import {SubjectService} from "../subject.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

  @Input()
  subject: Subject | undefined;

  constructor(private sServ: SubjectService,
              private activatedRoute: ActivatedRoute) {
  }

}
