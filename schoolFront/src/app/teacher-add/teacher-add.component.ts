import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Teacher} from "../../model/teacher.model";
import {TeacherService} from "../teacher.service";
import {KlassService} from "../klass.service";
import {Klass} from "../../model/klass.model";
import {Subject} from "../../model/subject.model";
import {SubjectService} from "../subject.service";


@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {

  myForm!: FormGroup;
  myForm2!: FormGroup;
  teacher: Teacher | undefined
  formSubmitted: boolean = false

  schoolId!: string
  klasses: Klass[] = []
  subjects!: Subject[]
  subject!: Subject
  subject2!: Subject
  subject3!: Subject

  constructor(private fb: FormBuilder,
              private teachServ: TeacherService,
              private klassServ: KlassService,
              private subjectServ:SubjectService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  };

  submitForm() {
    this.formSubmitted = true
    console.log(this.myForm.value)
    if (this.myForm.valid) {
      this.teachServ.add(this.myForm2.value)
        .subscribe(s =>
          this.router.navigate(['../'], {relativeTo: this.activatedRoute}))
    }
  };

  ngOnInit(): void {
    this.schoolId = this.activatedRoute.snapshot.paramMap.get("sId") || "";

    this.myForm = this.fb.group({
      lastName: [this.teacher?.lastName || '', Validators.required],
      firstName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],//dateOfBirth: [new Date(), Validators.required],<- validation date ne marche pas sinon
      principaleKlass:this.fb.group({
        id: ['']
      }),
      school: [{id: this.schoolId}],
      subject: this.fb.group({
        id: ['']
      }),
      subject2: this.fb.group({
        id: ['']
      }),
      subject3: this.fb.group({
        id: ['']
      })

    })
    this.subjects=[this.myForm.get("subject")?.value , this.myForm.get("subject2")?.value ,this.myForm.get("subject3")?.value ]
    this.myForm2 = this.fb.group({
      lastName: [this.myForm.get("lastName")?.value],
      firstName: [this.myForm.get("firstName")?.value],
      dateOfBirth: [this.myForm.get("dateOfBirth")?.value],//dateOfBirth: [new Date(), Validators.required],<- validation date ne marche pas sinon

      school: [{id: this.schoolId}],
      subjects: [this.subjects]

    })



    this.klassServ.findAll().subscribe(v =>
      this.klasses = v.filter(klass => klass.principalTeacher === null).filter(klass => klass.school.id === +this.schoolId))
    this.subjectServ.getAll().subscribe(v =>
      this.subjects = v.filter(subject => subject.school.id === +this.schoolId))
    //if(v.length >0)
    //  this.myForm.get('klass')?.get('id')?.setValue(v[0].id)
    // = v.filter(klass => klass.principalTeacher === null).filter(klass => klass.school.id === +this.schoolId))

  }
}
