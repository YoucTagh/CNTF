import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-turtle',
  templateUrl: './o-turtle.component.html',
  styleUrls: ['./o-turtle.component.scss']
})
export class OTurtleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'assets/ontology/cntf.ttl';
  }

}
