import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HeaderItemComponent } from '../header-item/header-item.component';
import { HeaderItem } from '../model/header';

@Component({
  selector: 'app-playground-main',
  templateUrl: './playground-main.component.html',
  styleUrls: ['./playground-main.component.scss']
})
export class PlaygroundMainComponent implements OnInit {

  selectedMethods = 'GET';
  methods = ['GET'];
  lastPosition: number = 0;
  url: string = 'http://localhost:8080//kg/ontology';
  headers: HeaderItem[] = [
    {
      position: ++this.lastPosition,
      selected: true,
      key: "Accept",
      value: "application/rdf+xml",
    },
    {
      position: ++this.lastPosition,
      selected: false,
      key: "",
      value: "application/ld+json; q=0.8, application/rdf+xml; q=0.5",
    }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  crossOffItem(data: any) {
    this.headers = this.headers.filter(header => header.position != data.position);
  }

  addNewHeader() {
    this.headers.push({
      position: ++this.lastPosition,
      selected: false,
      key: "",
      value: "",
    });
  }

  sendRequest() {

    if (!this.isValidHttpUrl()) {
      alert('Please enter a valid HTTP URI!!');
    }

    if (!this.isValidHeaders()) {
      alert('Please fill all headers keys and values!!');
    }

    // let headers = new HttpHeaders();

    // this.headers
    //   .filter(header => { return header.selected })
    //   .forEach(header => headers.append(header.key, header.value));

    // let headers1 = new HttpHeaders();
    // headers1.set('Accept', 'application/xml')

    // this.http.get(this.url, { headers: headers1 }).subscribe(
    //   response => {
    //     console.log(response);
    //   },
    //   error => {
    //     console.log(error);
    //   });

    const headers = { 'Accept': 'application/xml' }
    this.http.get<any>(this.url, { headers }).subscribe(data => {

      
    })
  }

  isValidHttpUrl() {
    let url;
    try {
      url = new URL(this.url);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  isValidHeaders() {

    var headers = this.headers.filter(header => {
      return header.selected
    })

    for (var header of headers) {
      if (!header.key || !header.value) {
        return false;
      }
    }

    return true;
  }
}
