import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Teacher} from "../../model/teacher.model";
import {Subject} from "../../model/subject.model";
import {SubjectService} from "../subject.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../course.service";
import {ClassRoom} from "../../model/classRoom.model";
import {ClassRoomService} from "../class-room.service";
import {TeacherService} from "../teacher.service";
import {Days} from "../../model/days.enum";
import {Course} from "../../model/course.model";

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent {

  @Input()
  day!: number

  @Input()
  start: string | undefined

  @Input()
  end: string | undefined

  @Output()
  outputVar: EventEmitter<string> = new EventEmitter()

  myForm!: FormGroup;
  formSubmitted: boolean = false

  schoolId!: string
  kId!: string

  teachers: Teacher[] = []
  classrooms: ClassRoom[] = []
  subjects: Subject[] = []
  courses: Course[] = []

  constructor(private fb: FormBuilder,
              private cServ: CourseService,
              private teachServ: TeacherService,
              private roomServ: ClassRoomService,
              private subjectServ:SubjectService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  };

  submitForm() {
    this.formSubmitted = true
    if (this.myForm.valid) {
      this.cServ.add(this.myForm.value)
        .subscribe(s => {
          this.outputVar.emit('quit')
          this.router.navigate(['../', this.kId], {relativeTo: this.activatedRoute})
        })
    }
  };


  ngOnInit(): void {
    this.schoolId = this.activatedRoute.snapshot.paramMap.get("sId") || "";
    this.kId = this.activatedRoute.snapshot.paramMap.get("kId") || "";
    this.myForm = this.fb.group({
      start: [this.start, Validators.required],
      end: [this.end, Validators.required],
      day: [this.day, Validators.required],
      teacher: this.fb.group({
        id: ['', Validators.required]
      }),
      classroom: this.fb.group({
        id: ['', Validators.required]
      }),
      subject: this.fb.group({
        id: ['', Validators.required]
      }),
      klass: {id: this.kId}

    })

    this.teachServ.findAll().subscribe(v =>
      this.teachers = v.filter(teacher => teacher.school.id === +this.schoolId))
    this.roomServ.findAll().subscribe(v =>
      this.classrooms = v.filter(room => room.school.id === +this.schoolId))
    this.subjectServ.getAll().subscribe(v =>
      this.subjects = v.filter(room => room.school.id === +this.schoolId))
  }

  verifTeachDispo(day: number, start: any, end: any) {
    this.courses
  }

}
