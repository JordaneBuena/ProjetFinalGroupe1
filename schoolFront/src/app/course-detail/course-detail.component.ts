import {Component, OnInit} from '@angular/core';
import {Klass} from "../../model/klass.model";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {KlassService} from "../klass.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit{

  klass: Klass | undefined;

  currentModal: NgbModalRef | undefined

  constructor(private klassServ: KlassService,
              private activatedRoute: ActivatedRoute,
              private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("kId") || "";
    if (id != '') {
      this.klassServ.findOne(+id).subscribe(v => this.klass = v)
    }
  }

  open(content: any) {
    this.currentModal = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: "static"})
  }

  deleteById() {
    this.klassServ.delete(this.klass ? this.klass.id : -1).subscribe(v => {
      this.currentModal?.close()
      this.router.navigate(['../'], {relativeTo: this.activatedRoute})
    })
  }

}
