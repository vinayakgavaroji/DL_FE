import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  book: any[] = [];
  displayedBooks: any[] = [];
  currentPage: number = 0;
  pageSize: number = 12;
  loading: boolean = false;
  allDataLoaded: boolean = false;

  constructor(private shared: SharedService, private _router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.getInitialStudentData();
  }

  getInitialStudentData() {
    this.loading = true;
    this.shared.getStudentsForInfiniteScrolling(0, 10).subscribe(
      (students) => {
        this.book = students;
        this.displayedBooks = this.book.slice(0, this.pageSize);
        this.loading = false;
      },
      (error) => {
        console.error("Error loading students:", error);
        this.loading = false;
      }
    );
  }

  loadMoreData() {
    if (this.loading || this.allDataLoaded) return;

    this.loading = true;
    const nextPageEnd = this.displayedBooks.length + this.pageSize;
    const newItems = this.book.slice(this.displayedBooks.length, nextPageEnd);

    if (newItems.length < this.pageSize || nextPageEnd >= this.book.length) {
      this.allDataLoaded = true;
    }

    this.displayedBooks = [...this.displayedBooks, ...newItems];
    this.loading = false;
  }

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
