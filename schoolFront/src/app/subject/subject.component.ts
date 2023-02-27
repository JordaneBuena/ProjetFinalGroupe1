import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "../../model/subject.model";
import {SchoolService} from "../school.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SubjectService} from "../subject.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

  @Input()
  subject: Subject | undefined;
  currentModal: NgbModalRef | undefined

  constructor(private sServ: SubjectService,
              private activatedRoute: ActivatedRoute,
              private modalService: NgbModal,
              private router: Router) {
  }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("tId") || "";
    if (id != '') {
      this.sServ.getOne(+id).subscribe(v => this.subject = v)
    }
  }

  open(content: any) {
    this.currentModal = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: "static"})
  }

  deleteById() {
    this.sServ.delete(this.subject ? this.subject.id : -1).subscribe(v => {
      this.currentModal?.close()
      this.router.navigate(['../'], {relativeTo: this.activatedRoute})
    })
  }

  getColor(){
    if(this.subject?.color==='green'){
      this.subject.color = 'rgba(0,255,0,0.35)';
    }
    if(this.subject?.color==='red'){
      this.subject.color = 'rgba(255,0,0,0.35)';
    }
    if(this.subject?.color==='blue'){
      this.subject.color = 'rgba(0,0,255,0.35)';
    }
    if(this.subject?.color==="white"){
      this.subject.color = 'rgba(255,255,255,0.35)';
    }
    return this.subject?.color;

  }


}
