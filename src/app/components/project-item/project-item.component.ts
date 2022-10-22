import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input() border : string = "";
  @Input() cover : string = "";
  @Input() text : string = "";
  @Input() codeLink : string = "";
  @Input() viewLink : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
