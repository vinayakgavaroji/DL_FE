import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm! : FormGroup;
  submitted:boolean = false;

  constructor(private fb : FormBuilder, private _router : Router, private authService: AuthService){}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(8)]]
    })
  }

  login(){
    this.submitted = true;
    this.authService.login(this.loginForm.value).subscribe(() => {
      this._router.navigate(['/dashboard'])
    },(error) => {
      throw new Error(error)
    })
  }

}
