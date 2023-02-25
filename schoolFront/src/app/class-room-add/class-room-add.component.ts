import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Klass} from "../../model/klass.model";
import {KlassService} from "../klass.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClassRoom} from "../../model/classRoom.model";
import {ClassRoomService} from "../class-room.service";

@Component({
  selector: 'app-class-room-add',
  templateUrl: './class-room-add.component.html',
  styleUrls: ['./class-room-add.component.css']
})
export class ClassRoomAddComponent {

  myForm!: FormGroup;
  room: ClassRoom | undefined
  formSubmitted: boolean = false

  schoolId: string | undefined

  constructor(private fb: FormBuilder,
              private roomServ: ClassRoomService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  };

  submitForm() {
    this.formSubmitted = true
    console.log(this.myForm.value)
    if (this.myForm.valid) {
      this.roomServ.add(this.myForm.value)
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
