import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit{

  constructor() {}

  ngOnInit() {}

  // showInput1 = true;
  // showInput2 = false;
  // showInput3 = false;

  // i1: string = '';
  // i2: string = '';
  // i3: string = '';

  // onInput1Change() {
  //   this.showInput2 = true;
  // }

  // onInput2Change() {
  //   this.showInput3 = true;
  // }

  // onInput3Change() {
  //   // Optional: Do something once all inputs are filled.
  //   console.log('All inputs completed:', this.i1, this.i2, this.i3);
  // }

  books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      published: new Date(1925, 3, 10),
      isbn: '978-0743273565',
      image: 'https://example.com/great-gatsby.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },

    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },

    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: new Date(1960, 6, 11),
      isbn: '978-0061120084',
      image: 'https://example.com/to-kill-a-mockingbird.jpg' // Replace with actual image URL
    },
  ];

}
