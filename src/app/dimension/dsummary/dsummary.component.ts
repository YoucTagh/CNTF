import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-dsummary',
  templateUrl: './dsummary.component.html',
  styleUrls: ['./dsummary.component.scss']
})
export class DSummaryComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }
}
