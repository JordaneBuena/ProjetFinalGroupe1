import {Component, Input} from '@angular/core';
import {Teacher} from "../../model/teacher.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {

  @Input()
  schoolId: number | undefined

  @Input()
  teacher: Teacher | undefined

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  goToDetail() {
    this.router.navigate([`${this.teacher?.id}`], { relativeTo: this.route });
  }
}
