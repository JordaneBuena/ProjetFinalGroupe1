import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Teacher} from "../../model/teacher.model";
import {TeacherService} from "../teacher.service";

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {

  myForm!: FormGroup;
  teacher: Teacher | undefined
  formSubmitted: boolean = false

  schoolId: string | undefined

  constructor(private fb: FormBuilder,
              private teachServ: TeacherService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  };

  submitForm() {
    this.formSubmitted = true
    console.log(this.myForm.value)
    if (this.myForm.valid) {
      this.teachServ.add(this.myForm.value)
        .subscribe(s =>
        this.router.navigate(['../'], {relativeTo: this.activatedRoute}))
    }
  };

  ngOnInit(): void {
    this.schoolId = this.activatedRoute.snapshot.paramMap.get("sId") || "";

    this.myForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      dateOfBirth: [new Date(), Validators.required],
      school: [{id: this.schoolId}]
    })
  }
}
