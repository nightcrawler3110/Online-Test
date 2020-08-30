import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators,AbstractControl } from '@angular/forms';
import {confirmPasswordValidator} from "../matchpassword";
  @Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm= new FormGroup({
    name: new FormControl("",Validators.required),
    passWord: new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern(/[^0-9a-zA-Z]/)]),
    college: new FormControl("",Validators.required),
    cgpa:new FormControl("",Validators.required),
    position:new FormControl("",Validators.required),
    email:new FormControl("",[Validators.required,Validators.email]),
    repassWord: new FormControl("",Validators.required),
    select:new FormControl("",Validators.required)
     },
     {validators:confirmPasswordValidator('passWord','repassWord')}
     
     
     );

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  registerDoneEventHandler()
  {
    this.router.navigateByUrl("/start");
  }

}
