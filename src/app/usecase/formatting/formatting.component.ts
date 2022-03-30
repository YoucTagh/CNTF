import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-formatting',
  templateUrl: './formatting.component.html',
  styleUrls: ['./formatting.component.scss']
})
export class FormattingComponent implements OnInit {
  references: Reference[] = [];
  refIDs: number[] = [3];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }
}
