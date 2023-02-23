import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "../../model/subject.model";
import {SubjectService} from "../subject.service";

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit{

  subjects : Subject[] = [];

  constructor(private subServ: SubjectService) {
  }

  ngOnInit(): void {
    this.subjects = this.subServ.getAll()
    console.log(this.subjects)
  }
}
