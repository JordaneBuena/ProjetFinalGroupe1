import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SchoolModel} from "../../model/school.model";
import {SchoolService} from "../school.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-school-param',
  templateUrl: './school-param.component.html',
  styleUrls: ['./school-param.component.css']
})
export class SchoolParamComponent implements OnInit{

  myForm!: FormGroup;
  school: SchoolModel | undefined
  formSubmitted: boolean = false

  id: string | undefined

  constructor(private fb: FormBuilder,
              private sServ: SchoolService,
              private activatedRoute: ActivatedRoute,
              private router: Router){};

  submitForm(){
    this.formSubmitted = true
    if (this.myForm.valid) {
      if (this.id !== '-1') {
        this.sServ.add(this.myForm.value)
          .subscribe(s =>
            this.router.navigateByUrl('/schools'))
      } else {
        this.sServ.modify(this.myForm.value)
          .subscribe(s =>
            this.router.navigateByUrl('/schools'))
      }
    }
  };

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("sId") || "";
    if (this.id != '') {
      this.sServ.findOne(+this.id).subscribe(v => this.school = v)
    }

    this.myForm = this.fb.group({
      name: [this.school?.name || '', Validators.required],
      address: [this.school?.address || '', Validators.required],
      type: [this.school?.type || '', Validators.required],
      phone: [this.school?.phone || '', Validators.required]
    })
  }
}
