import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-mfml',
  templateUrl: './mfml.component.html',
  styleUrls: ['./mfml.component.scss']
})
export class MFMLComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [55,3,6,37,47];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }
}
