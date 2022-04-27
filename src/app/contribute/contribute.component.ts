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
    var issueDescription = "At URI the https://ci.mines-stetienne.fr/cntf/... :";
    this.uri = "https://github.com/YoucTagh/CNTF/issues/new";
      //+ "?issue[title]=" + encodeURIComponent(issueTitle) + "&issue[description]=" + encodeURIComponent(issueDescription);
    return this.uri
  }
}
