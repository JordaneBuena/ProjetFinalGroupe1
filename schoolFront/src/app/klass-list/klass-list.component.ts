import { Component } from '@angular/core';
import {Teacher} from "../../model/teacher.model";
import {SchoolService} from "../school.service";
import {ActivatedRoute} from "@angular/router";
import {Klass} from "../../model/klass.model";
import {KlassService} from "../klass.service";

@Component({
  selector: 'app-klass-list',
  templateUrl: './klass-list.component.html',
  styleUrls: ['./klass-list.component.css']
})
export class KlassListComponent {

  klasses: Klass[] = []

  constructor(private klassServ: KlassService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("kId") || "";
    if (id != '') {
      this.klassServ.findAll().subscribe(v => this.klasses = v) //TODO filter by school
    }
  }

}
