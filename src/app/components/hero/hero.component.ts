import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
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
}  
