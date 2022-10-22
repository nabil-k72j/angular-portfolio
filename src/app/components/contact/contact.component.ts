import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  showContact! : boolean;
  subscription! : Subscription;

  constructor(private uiservice : UiService) { }

  ngOnInit(): void {
    this.subscription = this.uiservice.onToggle().subscribe((value) => (this.showContact = value));
  }

  onCLick() {
    this.uiservice.toggleAddTask();
  }
}
