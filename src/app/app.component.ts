import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as DOMPurify from 'dompurify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        type: 'line',
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  });

  clean = DOMPurify.sanitize('<b>hello there</b>');

}
