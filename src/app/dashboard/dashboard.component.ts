import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { AuthService } from 'src/services/auth/auth.service';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  book : any;

  constructor(private shared: SharedService, private _router: Router, private auth: AuthService) { }

  ngOnInit(){
    this.loadBarChart();
    this.loadPieChart();
    this.getStudent();
  }

  getStudent(){
    this.shared.getStudents().subscribe((s) => {
      this.book = s
    })
  }

  loadBarChart() {
    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5'],
        datasets: [{
          label: 'No. Of Books',
          data: [5, 8, 12, 7, 4],
          backgroundColor: '#2f5597',
        }]
      }
    });
  }

  loadPieChart() {
    new Chart('pieChart', {
      type: 'pie',
      data: {
        datasets: [{
          data: [15, 25, 50, 25, 15],
          backgroundColor: [
            '#ff6384',
            '#36a2eb',
            '#cc65fe',
            '#ffce56',
            '#e7e9ed'
          ],
        }],
        labels: ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5']
      }
    });
  }

  showViewTable() {
    this._router.navigate(['/books']);
  }

  showDeleteTable() {
    this._router.navigate(['/books', { deleteMode: false }]);
  }

  logout(){
    this.auth.logout()
  }

}
