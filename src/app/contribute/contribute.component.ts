import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss']
})
export class ContributeComponent implements OnInit {

  uri: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  createIssue() {
    var issueTitle = "";
    var issueDescription = "At [URI](" + location.href + "):";
    this.uri = "https://gitlab.emse.fr/yousouf.taghzouti/conneg-tf/-/issues/new"
      + "?issue[title]=" + encodeURIComponent(issueTitle) + "&issue[description]=" + encodeURIComponent(issueDescription);
    return this.uri
  }
}
