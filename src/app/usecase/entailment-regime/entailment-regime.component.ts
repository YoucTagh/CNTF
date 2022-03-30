import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-entailment-regime',
  templateUrl: './entailment-regime.component.html',
  styleUrls: ['./entailment-regime.component.scss']
})
export class EntailmentRegimeComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [2,7,13,23,3];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }

}
