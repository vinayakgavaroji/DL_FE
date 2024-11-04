import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Frontend';
  isLoggedIn : boolean = false;

  ngOnInit(){
    this.auth.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  constructor(private auth: AuthService){}
}
