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
  school!: SchoolModel
  formSubmitted: boolean = false

  constructor(private fb: FormBuilder,
              private sServ: SchoolService,
              private activatedRoute: ActivatedRoute,
              private router: Router){};

  submitForm(){
    this.formSubmitted = true
    if (this.myForm.valid) {
      if (!this.school) {
        this.sServ.add(this.myForm.value)
          .subscribe(s =>
            this.router.navigateByUrl('/schools'))
      } else {
        let schoolToUpdate = this.myForm.value
        console.log(schoolToUpdate)
        schoolToUpdate.id = this.school.id
        this.sServ.modify(this.myForm.value)
          .subscribe(s =>
            this.router.navigateByUrl('/schools'))
      }
    }
  };

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("sId") || "";
    if (id != '') {
      this.sServ.findOne(+id).subscribe(v => {
        this.school = v
        this.myForm.get('name')?.setValue(this.school.name)
        this.myForm.get('address')?.setValue(this.school.address)
        this.myForm.get('type')?.setValue(this.school.type)
        this.myForm.get('phone')?.setValue(this.school.phone)
      })
    }


    this.myForm = this.fb.group({
      name: [this.school?.name || '', Validators.required],
      address: [this.school?.address || '', Validators.required],
      type: [this.school?.type || '', Validators.required],
      phone: [this.school?.phone || '', Validators.required]
    })
  }
}
