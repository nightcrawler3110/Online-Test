import { ResultComponent } from './result/result.component';
import { TestComponent } from './test/test.component';
import { StartComponent } from './start/start.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';

const routes: Routes = [ 
  {path: "login", component:LoginComponent},
  {path: "register",component:RegisterComponent},
  {path: "start", component:StartComponent},
  {path:"test/:questionNumber", component:TestComponent},
  {path: "result", component:ResultComponent},
  {path:"", redirectTo:"/login", pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
