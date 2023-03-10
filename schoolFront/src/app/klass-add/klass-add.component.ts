import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Teacher} from "../../model/teacher.model";
import {TeacherService} from "../teacher.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Klass} from "../../model/klass.model";
import {KlassService} from "../klass.service";

@Component({
  selector: 'app-klass-add',
  templateUrl: './klass-add.component.html',
  styleUrls: ['./klass-add.component.css']
})
export class KlassAddComponent {

  myForm!: FormGroup;
  myForm2!: FormGroup;

  klass: Klass | undefined
  teacher: Teacher | undefined
  formSubmitted: boolean = false

  schoolId!: string

  teachers: Teacher[] = []

  klass1!: Klass



  constructor(private fb: FormBuilder,
              private klassServ: KlassService,
              private teacherServ: TeacherService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  };

  submitForm() {
    this.formSubmitted = true
    if (this.myForm.valid) {
      this.klassServ.add(this.myForm.value)
        .subscribe(s =>
          this.router.navigate(['../'], {relativeTo: this.activatedRoute}))
    }

  };

  ngOnInit(): void {
    this.schoolId = this.activatedRoute.snapshot.paramMap.get("sId") || "";
    const id = this.activatedRoute.snapshot.paramMap.get("tId") || "";

    // if (id != '') {
    //   this.teacherServ.findOne(+id).subscribe(v => {
    //     this.teacher = v
    //     this.myForm.get('id')?.setValue(this.teacher.id)
    //   })}

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      principalTeacher: this.myForm2 = this.fb.group({
         id: ['']
       }),
      school: {id: this.schoolId}
     })
    // this.myFormt = this.fb.group({
    //   //name: ['', Validators.required]
    //   principalTeacher: this.fb.group({
    //     id: [''],
    //     principaleKlass:{
    //      id: [''],
    //     }
    //   })
      // school: {id: this.schoolId}
    //})

    this.schoolId = this.activatedRoute.snapshot.paramMap.get("sId") || "";
    this.teacherServ.findAll().subscribe(v => this.teachers = v.filter(teacher => teacher.school.id === +this.schoolId))

    }





}
