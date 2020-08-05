import { Component, OnInit } from '@angular/core';
import { WebServiceService } from './Service/web-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'knorex-demo';
  countrydata: any;
  showHtml: boolean;
  constructor(private ws: WebServiceService) {

  }

  ngOnInit(): void {
    this.ws.fetchCountryDetails().subscribe(res => {
      this.countrydata = res[0];
      console.log(this.countrydata);
      this.showHtml = true;
    });
  }

  deleteData(i) {
    this.countrydata.options.splice(i, 1);
  }

  addInputField() {

    this.countrydata.options.push({
      'label': '',
      'value': ''
    });
  }

  exportToExcel() {
    this.ws.downloadFile(this.countrydata.options, 'KnorexData');
  }
  saveDetails() {
    this.ws.saveDetails(this.countrydata._id, this.countrydata.options).subscribe(res => {
      console.log(res);
    });
  }
}
