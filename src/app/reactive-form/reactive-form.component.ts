import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormArray, Validators } from '@angular/forms'
import { passwordMisMatch } from '../validators/custom.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(){}

  loginForm !: FormGroup

  ngOnInit(): void {
    
    this.loginForm = new FormGroup( {
      'username' : new FormControl('',Validators.required),
      'password' : new FormControl('',Validators.required),
      'confirm': new FormControl('',Validators.required),

      'address': new FormGroup({
        'city': new FormControl('',Validators.required),
        'pin':new FormControl('',Validators.required)
      }),
      'mobile': new FormArray([
        new FormGroup({
          'numbers':new FormControl('',Validators.required),
          'nickName':new FormControl('',Validators.required)
        })
      ])
    },{validators:passwordMisMatch})
  }

  getMobile(){
    (<FormArray>this.loginForm.get('mobile'))
     .push(
        new FormGroup({
          'numbers' : new FormControl(''),
          'nickName':new FormControl('')
        })
     )
  }

  get mobile(){   return this.loginForm.get('mobile') as FormArray; }  
  
  get numbers(){    return this.loginForm.get('numbers') as FormControl;}

  get address(){ return this.loginForm.get('address') as FormGroup }

  get city(){ return this.address.get('city') as FormControl  }

  submit(val:any){
    console.log(this.loginForm.value)
  }


}
