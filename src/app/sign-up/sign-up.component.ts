import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;
  submitted : Boolean = false

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.email]],  
      password: ['', [Validators.required, Validators.min(8)]]
    })
  }

  onSignup() {
    this.submitted = true
    this.authService.signup(this.signUpForm.value).subscribe((data) => {
      console.log(data)
      this.router.navigate(['/dashboard'])
    },(error) => {
      throw new Error(error)
    });
  }

}
