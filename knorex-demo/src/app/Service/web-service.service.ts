import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  constructor(private _http: HttpClient) {

  }

  fetchCountryDetails(): Observable<any> {
    // return this._http.get('localhost:3000/knorexDB');
    return this._http.get('../../assets/country.json');

  }

  httpGet() {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'localhost:3000/knorexDB', false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  downloadFile(data: any, filename: string) {
    const replacer = (key, value) => value === null ? '' : value;
    const header = Object.keys(data[0]);
    const csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    saveAs(blob, filename + '.csv');
  }

  saveDetails(_id: any, options: any): Observable<any> {
    return this._http.post('localhost:3000/knorexDB', { 'id': _id, 'data': options });
  }

}
