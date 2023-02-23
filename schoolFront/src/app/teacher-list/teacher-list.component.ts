import {Component, OnInit} from '@angular/core';
import {Teacher} from "../../model/teacher.model";
import {TeacherService} from "../teacher.service";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit{

  teachers: Teacher[] = []

  constructor(private teachServ: TeacherService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.teachers = this.teachServ.getAll()
  }

  goToItems(id: number) {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }

}
