import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
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

  lastName: string='blabla'
  firstName:string=''
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
      // this.subjects=[this.myForm.get("subject")?.value , this.myForm.get("subject2")?.value ,this.myForm.get("subject3")?.value ]
      // this.lastName = this.myForm.get("lastName")?.value
      // this.myForm2.lastName= <string>this.lastName
      // this.firstName = this.myForm.get("firstName")?.value
      // this.myForm2.firstName= <string>this.firstName
      // this.dateOfBirth = this.myForm.get("dateOfBirth")?.value
      // this.myForm2.dateOfBirth= this.dateOfBirth


      //this.myForm2.subjects= this.subjects
      this.teachServ.add(this.myForm.value)
        .subscribe(s =>
          this.router.navigate(['../'], {relativeTo: this.activatedRoute}))
    }
  };


  ngOnInit(): void {
    this.schoolId = this.activatedRoute.snapshot.paramMap.get("sId") || "";
    this.myForm = this.fb.group({
      lastName: [this.teacher?.lastName || '', Validators.required],
      firstName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      school: [{id: this.schoolId}],

    })
     this.myForm = this.fb.group({
       lastName: [this.teacher?.lastName || '', Validators.required],
       firstName: ['', Validators.required],
       dateOfBirth: ['', Validators.required],//dateOfBirth: [new Date(), Validators.required],<- validation date ne marche pas sinon
       //principaleKlass: this.fb.group({
    //   //  id: ['']
    //   //}),
       school: [{id: this.schoolId}],
       // subjects: this.fb.array([
       //   this.myForm2= this.fb.group({
       //     id:['']
       //   }),
       //   this.myForm3= this.fb.group({
       //     id:['']
       //   }),
       //   this.myForm4= this.fb.group({
       //     id:['']
       //   })
       // ])
     })


     //this.subjects2 = this.myForm.get('subjects') as FormArray;
    // this.subjects2.push(new FormControl());








    //this.klassServ.findAll().subscribe(v =>
      //this.klasses = v.filter(klass => klass.principalTeacher === null).filter(klass => klass.school.id === +this.schoolId))



    this.teachServ.findAll().subscribe(v =>
      this.teachers = v.filter(teacher => teacher.school.id === +this.schoolId))

    //if(v.length >0)
    //  this.myForm.get('klass')?.get('id')?.setValue(v[0].id)
    // = v.filter(klass => klass.principalTeacher === null).filter(klass => klass.school.id === +this.schoolId))

  }

}
