import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AuthInterceptor } from 'src/services/auth/auth.interceptor';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportComponent } from './report/report.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddBookComponent,
    BooksComponent,
    IssueBookComponent,
    AddStudentComponent,
    SignUpComponent,
    ReturnBookComponent,
    ReportComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
