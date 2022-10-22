import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  @Input() title : string = "";
  @Input() cover : string = "";
  @Input() border : string = "";
  @Input() color : string = "";
  @Input() link : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
