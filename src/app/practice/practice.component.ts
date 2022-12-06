import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit{

  ngOnInit(): void {
  }

  clr="red";


  setStyle:any;

  addition:any;
  multi:any;
  subtract:any;
  division:any;

  add(a:any,b:any){

    let x = parseInt(a.value);
    let y = parseInt(b.value);

    this.addition = x + y;
    this.multi = x*y;
    this.subtract = x-y;
    this.division = x / y;

    console.log(typeof a,typeof x)

  }




}
