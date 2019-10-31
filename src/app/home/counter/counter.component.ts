import { Component } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import { share } from 'rxjs/operators';



@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {
  public teacher = 104;
  public student = 1024;
  public staff = 265;

  public observable: Observable<boolean>;
  private observer: Observer<boolean>;

  constructor() {

    this.observable = new Observable<boolean>((observer: any) => this.observer = observer).pipe(share());

    // Trigger odometer after 2s
    setTimeout(() => this.observer.next(true), 1000);

  }


}
