import { Component } from '@angular/core';
import {filter, map} from "rxjs";
import {ActivationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isMenuOpen = false;

  toggleMenu():void{
    this.isMenuOpen =! this.isMenuOpen
  }

  title: string|undefined;

  sId:any;
  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(e => (e instanceof ActivationEnd) && (Object.keys(e.snapshot.params).length > 0)),
        map(e => e instanceof ActivationEnd ? e.snapshot.params : {})
      )
      .subscribe(params => {
        this.sId = Object.values(params).toString();
        this.sId = this.sId[0];
        console.log(this.sId)
      });
  }

}
