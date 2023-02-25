import {Component, OnInit} from '@angular/core';
import {SchoolModel} from "../../model/school.model";
import {SchoolService} from "../school.service";

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit{
  schoolList! : SchoolModel[];

  constructor(private sServ : SchoolService) {}

  ngOnInit(): void {
    this.sServ.findAll().subscribe(v => this.schoolList = v);
  }


}
