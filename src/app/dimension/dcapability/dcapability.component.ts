import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-dcapability',
  templateUrl: './dcapability.component.html',
  styleUrls: ['./dcapability.component.scss']
})
export class DCapabilityComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [1, 17, 27, 32, 33, 34, 35, 36, 28];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }
}
