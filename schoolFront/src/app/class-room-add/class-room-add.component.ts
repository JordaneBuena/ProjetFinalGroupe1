import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Klass} from "../../model/klass.model";
import {KlassService} from "../klass.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClassRoom} from "../../model/classRoom.model";
import {ClassRoomService} from "../class-room.service";
import {Subject} from "../../model/subject.model";
import {SubjectService} from "../subject.service";

@Component({
  selector: 'app-class-room-add',
  templateUrl: './class-room-add.component.html',
  styleUrls: ['./class-room-add.component.css']
})
export class ClassRoomAddComponent {

  myForm!: FormGroup;
  room: ClassRoom | undefined
  formSubmitted: boolean = false

  subjects!: Subject[]

  schoolId!: string

  constructor(private fb: FormBuilder,
              private roomServ: ClassRoomService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private subjectServ: SubjectService) {
  };



  getordersFormArray(): FormArray {
    return this.myForm.controls['subjectsExcluded'] as FormArray;
  }

  ngOnInit(): void {
    this.schoolId = this.activatedRoute.snapshot.paramMap.get("sId") || "";
    this.subjectServ.getAll().subscribe(
      v => {
        this.subjects = v.filter(subject => subject.school.id === +this.schoolId)
        this.addCheckboxes()})

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      subjectsExcluded: new FormArray([]),
      capacite: [0, Validators.required],
      school: {id: this.schoolId}
    })


  }

  private addCheckboxes() {
    this.subjects.forEach(() => this.getordersFormArray().push(new FormControl(false)));
  }

  submitForm() {
    const selectedOrderIds = (this.getordersFormArray().value as boolean[])
      .map((checked, i) => checked ? this.subjects[i].id : null)
      .filter(v => v !== null);
    let myClassroom = this.myForm.value
    myClassroom.subjectsExcluded = []
    selectedOrderIds.forEach(id => {
      let s = {id: id}
      myClassroom.subjectsExcluded.push(s)
    })
    this.formSubmitted = true

    console.log(this.myForm)
    if (this.myForm.valid) {
      this.roomServ.add(this.myForm.value)
        .subscribe(s =>
          this.router.navigate(['../'], {relativeTo: this.activatedRoute}))
    }
  };

}
