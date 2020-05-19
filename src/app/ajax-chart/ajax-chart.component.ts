import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ajax-chart',
  templateUrl: './ajax-chart.component.html',
  styleUrls: ['./ajax-chart.component.css']
})
export class AjaxChartComponent implements OnInit {

  public debug = true;
    public useResizeHandler = true;
    public i = 1;

    public data: any[];

    public layout: any = {
        title: 'Loading data from ajax',
    };

    constructor(public http: HttpClient) { }

    ngOnInit() {

    }

    public loadData() {
        this.http.get(`/assets/ajax-example-data.${this.i}.json`).toPromise().then(data => {
            this.data = data as any;
            this.i = this.i === 1 ? 2 : 1;
        });
    }

}
