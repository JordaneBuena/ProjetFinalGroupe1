import {Component, OnInit} from '@angular/core';
import {Klass} from "../../model/klass.model";
import {KlassService} from "../klass.service";
import {ActivatedRoute} from "@angular/router";
import {ClassRoom} from "../../model/classRoom.model";
import {ClassRoomService} from "../class-room.service";
import {SchoolService} from "../school.service";

@Component({
  selector: 'app-class-room-list',
  templateUrl: './class-room-list.component.html',
  styleUrls: ['./class-room-list.component.css']
})
export class ClassRoomListComponent implements OnInit{

  clasRooms: ClassRoom[] = []

  constructor(private roomServ: ClassRoomService,
              private schoolServ:SchoolService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("sId") || "";
    if (id != '') {
      // this.roomServ.findAll().subscribe(v => this.clasRooms = v) //TODO filter by school
      this.schoolServ.findAllClassroomsBySchool(+id).subscribe(v => this.clasRooms = v)
    }
  }

}
