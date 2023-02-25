import { Component } from '@angular/core';
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
    const id = this.activatedRoute.snapshot.paramMap.get("sId") || "";
    if (id != '') {
      this.klassServ.findAll().subscribe(v => this.klasses = v) //TODO filter by school
    }
  }

}
