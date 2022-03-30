import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-stransparent',
  templateUrl: './stransparent.component.html',
  styleUrls: ['./stransparent.component.scss']
})
export class STransparentComponent implements OnInit {
  references: Reference[] = [];
  refIDs: number[] = [6,47,37];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }


}
