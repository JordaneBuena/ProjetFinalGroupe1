import {Component, Input} from '@angular/core';
import {ClassRoom} from "../../model/classRoom.model";

@Component({
  selector: 'app-class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.css']
})
export class ClassRoomComponent {

  @Input()
  classRoom: ClassRoom | undefined

}
