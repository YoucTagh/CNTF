import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-dformatting',
  templateUrl: './dformatting.component.html',
  styleUrls: ['./dformatting.component.scss']
})
export class DFormattingComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }
}
