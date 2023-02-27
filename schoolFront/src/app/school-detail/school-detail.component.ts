import {Component, OnInit} from '@angular/core';
import {SchoolModel} from "../../model/school.model";
import {SchoolService} from "../school.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {Teacher} from "../../model/teacher.model";
import {Subject} from "../../model/subject.model";
import {Klass} from "../../model/klass.model";
import {ClassRoom} from "../../model/classRoom.model";

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit {

  school: SchoolModel | undefined;

  teachers: Teacher[] | undefined;

  subjects: Subject[] | undefined;

  klasses: Klass[] | undefined;

  classrooms: ClassRoom[] | undefined;

  currentModal: NgbModalRef | undefined

  constructor(private sServ: SchoolService,
              private activatedRoute: ActivatedRoute,
              private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("sId") || "";
    if (id != '') {
      this.sServ.findOne(+id).subscribe(v => this.school = v)
      this.sServ.findAllTeacherBySchool(+id).subscribe(v => this.teachers = v)

      this.sServ.findAllSubjectBySchool(+id).subscribe(v => this.subjects = v)

      this.sServ.findAllKlassesBySchool(+id).subscribe(v => this.klasses = v)

      this.sServ.findAllClassroomsBySchool(+id).subscribe(v => this.classrooms = v)
      console.log("nombre de salle" + this.classrooms?.length)
    }
  }

  open(content: any) {
    this.currentModal = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: "static"})
  }

  deleteById() {
    this.sServ.delete(this.school ? this.school.id : -1).subscribe(v => {
      this.currentModal?.close()
      this.router.navigate(['../'], {relativeTo: this.activatedRoute})
    })
  }
}
