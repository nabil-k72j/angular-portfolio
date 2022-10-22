import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  showContact! : boolean;
  subsciption! : Subscription;

  constructor(private uiservice : UiService) { 
    this.subsciption = this.uiservice.onToggle().subscribe((value) => (this.showContact = value));
  }

  ngOnInit(): void {
  }

  onCLick() {
    this.uiservice.toggleAddTask();
  }

  toTop() {
    window.scrollTo(0,0)
  }
}
