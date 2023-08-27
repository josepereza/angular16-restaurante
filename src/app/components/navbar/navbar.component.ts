import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  scrolling: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.scrolling = false;
  }

  @HostListener('document:scroll', ['$event']) onScrollEvent(){
    // console.log($event['Window']);
     console.log("scrolling");
     
     if(!this.scrolling) {
       this.scrolling = true;
     }
     if (this.document.documentElement.scrollTop==0){
       this.scrolling=false;
     } 
  }
}
