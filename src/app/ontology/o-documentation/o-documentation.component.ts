import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-documentation',
  templateUrl: './o-documentation.component.html',
  styleUrls: ['./o-documentation.component.scss']
})
export class ODocumentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'ontology.html';
  }

}
