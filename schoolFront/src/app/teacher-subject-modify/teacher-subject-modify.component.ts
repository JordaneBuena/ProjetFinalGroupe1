import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Teacher} from "../../model/teacher.model";
import {Klass} from "../../model/klass.model";
import {Subject} from "../../model/subject.model";
import {TeacherService} from "../teacher.service";
import {KlassService} from "../klass.service";
import {SubjectService} from "../subject.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";

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
  formC!: FormControl;

  teacher: Teacher | undefined
  subject1: Subject | undefined
  subject2: Subject | undefined
  subject3: Subject | undefined
  formSubmitted: boolean = false

  schoolId!: string
  klasses: Klass[] = []
  subjects!: Subject[]
  teachers!: Teacher[]
  id1!:number


  subjects1!: Subject[]

  dateOfBirth!: Date



  constructor(private fb: FormBuilder,
              private teachServ: TeacherService,
              private klassServ: KlassService,
              private subjectServ: SubjectService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private datepipe: DatePipe) {
  };

  submitForm() {
    this.formSubmitted = true

    console.log(this.myForm)
    if (this.myForm.valid) {
      this.teachServ.add(this.myForm.value)
        .subscribe(s =>
          this.router.navigate(['../../'], {relativeTo: this.activatedRoute}))
    }
  };


  ngOnInit(): void {
    this.schoolId = this.activatedRoute.snapshot.paramMap.get("sId") || "";
    const id = this.activatedRoute.snapshot.paramMap.get("tId") || "";
    this.datepipe.transform(this.teacher?.dateOfBirth, 'dd/MM/yyyy');
    if (id != '') {
      this.teachServ.findOne(+id).subscribe(v => {
        this.teacher = v
        this.myForm.get('id')?.setValue(this.teacher.id)
        this.myForm.get('firstName')?.setValue(this.teacher.firstName)
        this.myForm.get('lastName')?.setValue(this.teacher.lastName)
        this.myForm3.get('id')?.setValue(this.subject1?.id)
        this.myForm.get('dateOfBirth')?.setValue(this.datepipe.transform(this.teacher.dateOfBirth, 'yyyy-MM-dd'))
        //this.myForm.get('dateOfBirth')?.setValue(this.teacher.dateOfBirth)
      })


      //if (this.myForm.get('id')?.value === true){
       // this.myForm.get('id')?.enable()
        // }
    }
    //const id1 = this.activatedRoute.snapshot.paramMap.get("sId") || "";

    //if (this.id1 != null) {
      //this.subjectServ.getOne(this.id1).subscribe(t => {
        //this.subject1 = t
        //this.myForm3.get('name')?.setValue(this.subject1.name || "")
        //this.myForm3.get('color')?.setValue(this.subject1.color || "")
       // this.myForm3.get('school')?.setValue(this.subject1.school || "")
      //})
    //}
    /*
    const id2 = this.myForm4.get('id') || "";
    if (id2 != '') {
      this.subjectServ.getOne(+id2).subscribe(v => {
        this.subject2 = v
        this.myForm.get('name')?.setValue(this.subject2.name || "")
        this.myForm.get('color')?.setValue(this.subject2.color || "")
        this.myForm.get('school')?.setValue(this.subject2.school || "")
      })
    }

      const id3 = this.myForm4.get('id') || "";
      if (id3 != '') {
        this.subjectServ.getOne(+id3).subscribe(v => {
          this.subject3 = v
          this.myForm.get('name')?.setValue(this.subject3.name || "")
          this.myForm.get('color')?.setValue(this.subject3.color || "")
          this.myForm.get('school')?.setValue(this.subject3.school || "")
        })
      }


*/


      this.myForm = this.fb.group({
        id: [this.teacher?.id || '', Validators.required],
        lastName: [this.teacher?.lastName || '', Validators.required],
        firstName: [this.teacher?.firstName || '', Validators.required],

        dateOfBirth: [this.teacher?.dateOfBirth || '', Validators.required],
        school: [{id: this.schoolId}],
        subjects: this.fb.array([
          this.myForm3 = this.fb.group({
            id: ['', Validators.required],
              //name: [this.subject1?.name || ''],
              //color: [this.subject1?.name || ''],
           // school: [this.subject1?.school || '']
          }),
          this.myForm4 = this.fb.group({
            id: ['', Validators.required],
           // name: [this.subject2?.name || ''],
           // color: [this.subject2?.name || ''],
           // school: [this.subject2?.school || '']
          }),
          this.myForm5 = this.fb.group({
            id: ['', Validators.required],
           // name: [this.subject3?.name || ''],
           // color: [this.subject3?.name || ''],
           // school: [this.subject3?.school || '']
          })
        ])
      })
    //this.id1 = this.myForm3.get('id')?.value || null;
    //console.log(this.id1)


      this.teachServ.findAll().subscribe(v =>
        this.teachers = v.filter(teacher => teacher.school.id === +this.schoolId))
      this.subjectServ.getAll().subscribe(v =>
        this.subjects = v.filter(subject => subject.school.id === +this.schoolId))
    //this.subjectServ.getOne().subscribe(v =>
      //this.subject1 = v.filter(subject => subject.school.id === +this.schoolId))

      // this.teachServ.findAll().subscribe(v =>
      // this.teachers2 = v.filter(teacher => teacher.id === this.teacher?.id).filter(teacher => teacher.school.id === +this.schoolId))
      // v.filter(klass => klass.principalTeacher === null).filter(klass => klass.school.id === +this.schoolId))

    }
  }

