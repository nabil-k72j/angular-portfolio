import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  @Input() url : string = "";
  @Input() cover : string = "";
  @Input() name : string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
