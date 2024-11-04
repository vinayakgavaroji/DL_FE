import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{


  isLoggedIn : Boolean = false;

  constructor(private auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  showViewTable() {
    this._router.navigate(['/books']);
  }

  showDeleteTable() {
    this._router.navigate(['/books', { deleteMode: false }]);
  }

  logout() {
    this.auth.logout()
  }


}
