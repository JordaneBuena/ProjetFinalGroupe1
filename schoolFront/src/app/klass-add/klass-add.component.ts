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
  klass: Klass | undefined
  formSubmitted: boolean = false

  schoolId: string | undefined

  constructor(private fb: FormBuilder,
              private klassServ: KlassService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  };

  submitForm() {
    this.formSubmitted = true
    console.log(this.myForm.value)
    if (this.myForm.valid) {
      this.klassServ.add(this.myForm.value)
        .subscribe(s =>
          this.router.navigate(['../'], {relativeTo: this.activatedRoute}))
    }
  };

  ngOnInit(): void {
    this.schoolId = this.activatedRoute.snapshot.paramMap.get("sId") || "";

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      principalTeacher: ['', Validators.required],
      school: {id: this.schoolId}
    })
  }
}
