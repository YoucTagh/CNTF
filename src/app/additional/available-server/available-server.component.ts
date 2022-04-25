import { Component, OnInit } from '@angular/core';
import { Reference, references } from '../../_files/ReferencesList';

@Component({
  selector: 'app-available-server',
  templateUrl: './available-server.component.html',
  styleUrls: ['./available-server.component.scss']
})
export class AvailableServerComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [47,6];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }

}
