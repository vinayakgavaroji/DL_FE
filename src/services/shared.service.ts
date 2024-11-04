import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  private _url = "http://localhost:3000/api/protected-route/";

  issueBooks(rollNo: number, bookData: { bookId: string }): Observable<any> {
    const body = { rollNo, bookId: bookData.bookId };
    return this.http.post(this._url + "issue-book", body);
  }

  getBooks(): Observable<any> {
    return this.http.get<any>(this._url + "getBooks");
  }

  getStudents(): Observable<any> {
    return this.http.get<any>(this._url + "getStudents")
  }

  addStudent(body: any): Observable<any> {
    return this.http.post<any>(this._url + "addStudent", body)
  }

  addBook(body: any): Observable<any> {
    return this.http.post<any>(this._url + 'addBook', body);
  }

  deleteBook(id: any): Observable<any> {
    return this.http.delete<any>(this._url + "deleteBook/" + id);
  }

  // getStudentByBookId(id: any){
  //   return this.http.get<any>(this._url+"students/holding-book"+id);
  // }

  getStudentsForInfiniteScrolling(page: any, pageSize: any): Observable<any[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any[]>(this._url + "getStudents", { params });
  }

}
