import {Component, OnInit} from '@angular/core';
import {SchoolModel} from "../../model/school.model";
import {SchoolService} from "../school.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Teacher} from "../../model/teacher.model";
import {TeacherService} from "../teacher.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {Subject} from "../../model/subject.model";
import {SubjectService} from "../subject.service";

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit{

  teacher: Teacher | undefined;

  currentModal: NgbModalRef | undefined

  subjects!: Subject[]

  constructor(private sServ: TeacherService,
              private subjectServ: SubjectService,
              private activatedRoute: ActivatedRoute,
              private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("tId") || "";
    if (id != '') {
      this.sServ.findOne(+id).subscribe(v => this.teacher = v)
    }
    this.subjectServ.getAll().subscribe(v =>
      this.subjects)

  }

  open(content: any) {
    this.currentModal = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: "static"})
  }

  deleteById() {
    this.sServ.delete(this.teacher ? this.teacher.id : -1).subscribe(v => {
      this.currentModal?.close()
      this.router.navigate(['../'], {relativeTo: this.activatedRoute})
    })
  }

}
