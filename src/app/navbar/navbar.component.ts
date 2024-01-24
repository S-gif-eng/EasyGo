import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
navToggle=document.getElementById('nav-toggle')
navlist:any
// toggle function for mobile screen (responsive nav bar)
toggle()
{
  this.navlist=document.querySelector('.nav-list')
  this.navlist.style.display=(this.navlist.style.display=='none'||this.navlist.style.display==''?'Block':'none')
}

  

  constructor() { }

  ngOnInit(): void {
  }

}
