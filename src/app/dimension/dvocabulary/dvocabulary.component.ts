import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-dvocabulary',
  templateUrl: './dvocabulary.component.html',
  styleUrls: ['./dvocabulary.component.scss']
})
export class DVocabularyComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [13];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }
}
