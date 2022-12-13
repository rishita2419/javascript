import { Component,OnInit } from '@angular/core';
import { Observable,interval,Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  // constructor(public dataSubscription: Subscription){

  // }

  ngOnInit(): void {

    // this.dataSubscription = interval(1000).subscribe(x =>  console.log(x) )
    this.arr =[ 'India','US','Russia'];
  }

  //  observe = new Observable();

  myName="SACHIN";

  arr:any=[];

  add(val:any){
    this.arr.push(val)
    console.log(this.arr)
  }


}
