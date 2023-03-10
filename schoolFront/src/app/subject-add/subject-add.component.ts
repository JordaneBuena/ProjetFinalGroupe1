import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subject} from "../../model/subject.model";
import {SubjectService} from "../subject.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SchoolModel} from "../../model/school.model";
import {SchoolService} from "../school.service";

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent implements OnInit{
  myForm!: FormGroup;
  subject: Subject | undefined
  formSubmitted: boolean = false

  id: string | undefined

  constructor(private fb: FormBuilder,
              private sServ: SubjectService,
              private activatedRoute: ActivatedRoute,
              private router: Router){};

  submitForm() {
    console.log(this.myForm.value);
    this.formSubmitted = true
    if (this.myForm.valid) {
      this.sServ.add(this.myForm.value)
        .subscribe(s =>
          this.router.navigate(['../'], {relativeTo: this.activatedRoute}))
    }
  };

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("sId") || "";
    if (this.id != '') {
      this.sServ.getOne(+this.id).subscribe(v => {
        this.subject = v
      this.myForm.get('name')?.setValue(this.subject.name)
      this.myForm.get('color')?.setValue(this.subject.color)
    })
  }

    this.myForm = this.fb.group({
      name: [this.subject?.name || '', Validators.required],
      color: [this.subject?.color || '', Validators.required],
      school: {id:this.id}
    })


  }

}
