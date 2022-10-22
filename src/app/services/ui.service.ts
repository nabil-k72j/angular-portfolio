import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showContact : boolean = false;
  private subject = new Subject<any>()

  constructor() { }

  toggleAddTask() : void {
    this.showContact = !this.showContact;
    this.subject.next(this.showContact);
  }

  onToggle() : Observable<any>{
    return this.subject.asObservable();
  }
}
