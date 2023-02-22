import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {SchoolModel} from "../../model/school.model";

@Component({
  selector: 'app-school-param',
  templateUrl: './school-param.component.html',
  styleUrls: ['./school-param.component.css']
})
export class SchoolParamComponent {
  myForm!: FormGroup;

  constructor(){
  };

  submitForm(){};
}
