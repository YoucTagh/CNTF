import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-dentailment-regime',
  templateUrl: './dentailment-regime.component.html',
  styleUrls: ['./dentailment-regime.component.scss']
})
export class DEntailmentRegimeComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }

}
