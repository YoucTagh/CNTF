import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-cc-headers',
  templateUrl: './cc-headers.component.html',
  styleUrls: ['./cc-headers.component.scss']
})
export class CCHeadersComponent implements OnInit {
  references: Reference[] = [];
  refIDs: number[] = [47,44];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }
}
