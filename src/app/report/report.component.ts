import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{

  ngOnInit() {
    this.loadBarChart()
    this.loadPieChart()
  }

  constructor(){}


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
          label: 'No. Of Books',
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

}
