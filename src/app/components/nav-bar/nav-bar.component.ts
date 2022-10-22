import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toWork() {
    const work = document.getElementById('work');
    work?.scrollIntoView();
  }
  
  toSkills() {
    const skill = document.getElementById('skills');
    skill?.scrollIntoView();
  }
}
