import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {

  issueBookForm!: FormGroup
  submitted: boolean = false;
  successMsg: String = "";
  errorMsg: String = "";
  getBooks: any[] = [];
  getStudents: any[] = [];

  constructor(private shared: SharedService) { }

  ngOnInit() {
    this.shared.getBooks().subscribe((data) => {
      this.getBooks = data;
    })

    this.shared.getStudents().subscribe((data) => {
      this.getStudents = data;
    })

    this.issueBookForm = new FormGroup({
      isbn: new FormControl('', [Validators.required]),
      rollNo: new FormControl('', [Validators.required]),
    })
  }

  issueBook() {
    this.submitted = true;
    this.successMsg = "";
    this.errorMsg = "";
    if (this.issueBookForm.valid) {
      const rollNo = this.issueBookForm.value.rollNo;
      const bookData = {
        bookId: this.issueBookForm.value.isbn
      };

      this.shared.issueBooks(rollNo, bookData).subscribe((response) => {
        console.log(response)
        this.successMsg = `Book issued successfully to ${response.name}.`;
        this.issueBookForm.reset();
        this.submitted = false;
      },
        (error) => {
          this.errorMsg = error.error.message || 'Error issuing book';
        }
      );
    }
  }

}