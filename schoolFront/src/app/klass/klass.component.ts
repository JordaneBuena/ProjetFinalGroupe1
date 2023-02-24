import {Component, Input} from '@angular/core';
import {Teacher} from "../../model/teacher.model";
import {Klass} from "../../model/klass.model";

@Component({
  selector: 'app-klass',
  templateUrl: './klass.component.html',
  styleUrls: ['./klass.component.css']
})
export class KlassComponent {

  @Input()
  klass: Klass | undefined
}
