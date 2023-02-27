import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Klass} from "../../model/klass.model";
import {KlassService} from "../klass.service";
import {SchoolService} from "../school.service";

@Component({
  selector: 'app-klass-list',
  templateUrl: './klass-list.component.html',
  styleUrls: ['./klass-list.component.css']
})
export class KlassListComponent {

  klasses: Klass[] = []

  constructor(private klassServ: KlassService,
              private schoolServ:SchoolService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("sId") || "";
    if (id != '') {
      this.schoolServ.findAllKlassesBySchool(+id).subscribe(v => this.klasses = v)
    }


  }

}
