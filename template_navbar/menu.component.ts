import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isMenuOpen = false;

  toggleMenu():void{
    this.isMenuOpen =! this.isMenuOpen

    // if(!this.isMenuOpen){
    //   document.getElementsByClassName("navlinks")[0].classList.add("haha")
    // }else{
    //   document.getElementsByClassName("navlinks haha")[0].classList.remove("haha")

    // }



  }

}
