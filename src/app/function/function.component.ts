import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss']
})
export class FunctionComponent implements OnInit{

  constructor(){
    this.data
  }

  ngOnInit(): void {
    this.customObservable.subscribe(console.log)
  }

  customObservable = new Observable( x => {
      x.next(20),
      x.next(25) 
    }
  )

  public data = new BehaviorSubject('data');

}
