import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AuthGuard } from 'src/services/auth/auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { ReportComponent } from './report/report.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "sidebar", component: SidebarComponent },
  { path: "addBook", component:AddBookComponent },
  { path: "books", component: BooksComponent },
  { path: "issuebooks", component: IssueBookComponent },
  { path: "addStudent", component: AddStudentComponent },
  { path: "return-book", component: ReturnBookComponent },
  { path: "report", component: ReportComponent },
  { path: "**", redirectTo: "/dashboard", pathMatch:"full" },
  { path: " ", redirectTo:"/dashboard", pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
