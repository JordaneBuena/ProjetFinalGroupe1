import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Teacher} from "../../model/teacher.model";
import {Klass} from "../../model/klass.model";
import {Subject} from "../../model/subject.model";
import {TeacherService} from "../teacher.service";
import {KlassService} from "../klass.service";
import {SubjectService} from "../subject.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-teacher-subject-modify',
  templateUrl: './teacher-subject-modify.component.html',
  styleUrls: ['./teacher-subject-modify.component.css']
})
export class TeacherSubjectModifyComponent {

  myForm!: FormGroup;
  myForm2!: FormGroup;
  myForm3!: FormGroup;
  myForm4!: FormGroup;
  myForm5!: FormGroup;

  teacher: Teacher | undefined
  formSubmitted: boolean = false

  schoolId!: string
  klasses: Klass[] = []
  subjects!: Subject[]
  teachers!: Teacher[]

  subjects1!: Subject[]

  dateOfBirth!: Date



  constructor(private fb: FormBuilder,
              private teachServ: TeacherService,
              private klassServ: KlassService,
              private subjectServ:SubjectService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  };

  submitForm() {
    this.formSubmitted = true

    console.log(this.myForm)
    if (this.myForm.valid) {
      this.teachServ.add(this.myForm.value)
        .subscribe(s =>
          this.router.navigate(['../subjects/modify'], {relativeTo: this.activatedRoute}))
    }
  };


  ngOnInit(): void {
    this.schoolId=this.activatedRoute.snapshot.paramMap.get("sId") || "";
    const id = this.activatedRoute.snapshot.paramMap.get("sId") || "";
     if (id != '') {
       this.teachServ.findOne(+id).subscribe(v => {
         this.teacher = v
         this.myForm.get('id')?.setValue(this.teacher.id)
         this.myForm.get('firstName')?.setValue(this.teacher.firstName)
         this.myForm.get('lastName')?.setValue(this.teacher.lastName)
         this.myForm.get('dateOfBirth')?.setValue(this.teacher.dateOfBirth)


      })
    }

    this.myForm = this.fb.group({
      id:[this.teacher?.id || '', Validators.required],
      lastName: [this.teacher?.lastName || '', Validators.required],
      firstName: [this.teacher?.firstName || '', Validators.required],
      dateOfBirth: [this.teacher?.dateOfBirth || '', Validators.required],
      school: [{id: this.schoolId}],
      subjects: this.fb.array([
        this.myForm3= this.fb.group({
          id:['']
        }),
        this.myForm4= this.fb.group({
          id:['']
        }),
        this.myForm5= this.fb.group({
          id:['']
        })
      ])
    })


    this.teachServ.findAll().subscribe(v =>
      this.teachers = v.filter(teacher => teacher.school.id === +this.schoolId))
    this.subjectServ.getAll().subscribe(v =>
      this.subjects = v.filter(subject => subject.school.id === +this.schoolId))

   // this.teachServ.findAll().subscribe(v =>
     // this.teachers2 = v.filter(teacher => teacher.id === this.teacher?.id).filter(teacher => teacher.school.id === +this.schoolId))
   // v.filter(klass => klass.principalTeacher === null).filter(klass => klass.school.id === +this.schoolId))

  }
}
