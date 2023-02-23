import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SchoolService} from "../school.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Teacher} from "../../model/teacher.model";
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {

  model: NgbDateStruct | undefined;

  myForm!: FormGroup;
  teacher: Teacher | undefined
  formSubmitted: boolean = false

  id: string | undefined

  constructor(private fb: FormBuilder,
              private teachServ: SchoolService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  };

  submitForm() {
    this.formSubmitted = true
    if (this.myForm.valid) {
      this.teachServ.modify(this.myForm.value)
        .subscribe(s =>
          this.router.navigateByUrl('./'))
    }
  };

  ngOnInit(): void {
    this.myForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      subjects: ['', Validators.required]
    })
  }
}
