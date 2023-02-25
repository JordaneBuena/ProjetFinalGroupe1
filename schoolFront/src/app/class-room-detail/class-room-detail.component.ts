import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {ClassRoom} from "../../model/classRoom.model";
import {ClassRoomService} from "../class-room.service";

@Component({
  selector: 'app-class-room-detail',
  templateUrl: './class-room-detail.component.html',
  styleUrls: ['./class-room-detail.component.css']
})
export class ClassRoomDetailComponent implements OnInit{

  room: ClassRoom | undefined;

  currentModal: NgbModalRef | undefined

  constructor(private roomServ: ClassRoomService,
              private activatedRoute: ActivatedRoute,
              private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("rId") || "";
    if (id != '') {
      this.roomServ.findOne(+id).subscribe(v => this.room = v)
    }
  }

  open(content: any) {
    this.currentModal = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: "static"})
  }

  deleteById() {
    this.roomServ.delete(this.room ? this.room.id : -1).subscribe(v => {
      this.currentModal?.close()
      this.router.navigate(['../'], {relativeTo: this.activatedRoute})
    })
  }

}
