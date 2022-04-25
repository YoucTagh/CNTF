import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-smart-building',
  templateUrl: './smart-building.component.html',
  styleUrls: ['./smart-building.component.scss']
})
export class SmartBuildingComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [11,52];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }
}
