import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-dcrs',
  templateUrl: './dcrs.component.html',
  styleUrls: ['./dcrs.component.scss']
})
export class DCRSComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }
}
