import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup, Validators,AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    userName: new FormControl("",Validators.required),
    passWord: new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern(/[^0-9a-zA-Z]/)])
     })

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  loginEventHandler()
  {
        this.router.navigateByUrl('/start');
  }
  registerEventHandler()
  {
    this.router.navigateByUrl('/register');
  }

}
