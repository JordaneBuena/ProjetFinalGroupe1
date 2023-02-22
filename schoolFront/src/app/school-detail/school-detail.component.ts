import {Component, OnInit} from '@angular/core';
import {SchoolModel} from "../../model/school.model";
import {SchoolService} from "../school.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit{

  school: SchoolModel | undefined;

  constructor(private sServ: SchoolService,
              private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id") || "";
    if (id != '') {
      this.school = this.sServ.findOne(+id);
    }
  }
}
